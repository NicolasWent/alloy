use crate::{
    layers::{FillerControlFlow, GasFiller, JoinFill, NonceFiller, SignerLayer, TxFiller},
    Provider, RootProvider,
};
use alloy_network::{Ethereum, Network};
use alloy_rpc_client::{BuiltInConnectionString, ClientBuilder, RpcClient};
use alloy_transport::{BoxTransport, Transport, TransportError, TransportResult};
use std::marker::PhantomData;

/// A layering abstraction in the vein of [`tower::Layer`]
///
/// [`tower::Layer`]: https://docs.rs/tower/latest/tower/trait.Layer.html
pub trait ProviderLayer<P: Provider<T, N>, T: Transport + Clone, N: Network = Ethereum> {
    /// The provider constructed by this layer.
    type Provider: Provider<T, N>;

    /// Wrap the given provider in the layer's provider.
    fn layer(&self, inner: P) -> Self::Provider;
}

/// An identity layer that does nothing.
#[derive(Debug, Clone, Copy)]
pub struct Identity;

impl<N> TxFiller<N> for Identity
where
    N: Network,
{
    type Fillable = ();

    fn status(&self, _tx: &<N as Network>::TransactionRequest) -> FillerControlFlow {
        FillerControlFlow::Finished
    }

    async fn prepare<P, T>(
        &self,
        _provider: &P,
        _tx: &N::TransactionRequest,
    ) -> TransportResult<Self::Fillable> {
        Ok(())
    }

    fn fill(&self, _to_fill: Self::Fillable, _tx: &mut N::TransactionRequest) {
        // Do nothing
    }
}

impl<P, T, N> ProviderLayer<P, T, N> for Identity
where
    T: Transport + Clone,
    N: Network,
    P: Provider<T, N>,
{
    type Provider = P;

    fn layer(&self, inner: P) -> Self::Provider {
        inner
    }
}

/// A stack of two providers.
#[derive(Debug)]
pub struct Stack<Inner, Outer> {
    inner: Inner,
    outer: Outer,
}

impl<Inner, Outer> Stack<Inner, Outer> {
    /// Create a new `Stack`.
    pub const fn new(inner: Inner, outer: Outer) -> Self {
        Stack { inner, outer }
    }
}

impl<P, T, N, Inner, Outer> ProviderLayer<P, T, N> for Stack<Inner, Outer>
where
    T: Transport + Clone,
    N: Network,
    P: Provider<T, N>,
    Inner: ProviderLayer<P, T, N>,
    Outer: ProviderLayer<Inner::Provider, T, N>,
{
    type Provider = Outer::Provider;

    fn layer(&self, provider: P) -> Self::Provider {
        let inner = self.inner.layer(provider);

        self.outer.layer(inner)
    }
}

/// A builder for constructing a [`Provider`] from various layers.
///
/// This type is similar to [`tower::ServiceBuilder`], with extra complication
/// around maintaining the network and transport types.
///
/// [`tower::ServiceBuilder`]: https://docs.rs/tower/latest/tower/struct.ServiceBuilder.html
#[derive(Debug)]
pub struct ProviderBuilder<L, F, N = Ethereum> {
    layer: L,
    filler: F,
    network: PhantomData<fn() -> N>,
}

impl ProviderBuilder<Identity, Identity, Ethereum> {
    /// Create a new [`ProviderBuilder`].
    pub const fn new() -> Self {
        ProviderBuilder { layer: Identity, filler: Identity, network: PhantomData }
    }
}

impl<N> Default for ProviderBuilder<Identity, Identity, N> {
    fn default() -> Self {
        ProviderBuilder { layer: Identity, filler: Identity, network: PhantomData }
    }
}

impl<L, F, N> ProviderBuilder<L, F, N> {
    /// Add a layer to the stack being built. This is similar to
    /// [`tower::ServiceBuilder::layer`].
    ///
    /// ## Note:
    ///
    /// Layers are added in outer-to-inner order, as in
    /// [`tower::ServiceBuilder`]. The first layer added will be the first to
    /// see the request.
    ///
    /// [`tower::ServiceBuilder::layer`]: https://docs.rs/tower/latest/tower/struct.ServiceBuilder.html#method.layer
    /// [`tower::ServiceBuilder`]: https://docs.rs/tower/latest/tower/struct.ServiceBuilder.html
    pub fn layer<Inner>(self, layer: Inner) -> ProviderBuilder<Stack<Inner, L>, F, N> {
        ProviderBuilder {
            layer: Stack::new(layer, self.layer),
            filler: self.filler,
            network: PhantomData,
        }
    }

    /// Add a transaction filler to the stack being built. Transaction fillers
    /// are used to fill in missing fields on transactions before they are sent,
    /// and are all joined to form the outermost layer of the stack.
    pub fn filler<F2>(self, filler: F2) -> ProviderBuilder<L, JoinFill<F, F2, N>, N> {
        ProviderBuilder {
            layer: self.layer,
            filler: JoinFill::new(self.filler, filler),
            network: PhantomData,
        }
    }

    /// Add a signer layer to the stack being built.
    ///
    /// See [`SignerLayer`].
    pub fn signer<S>(self, signer: S) -> ProviderBuilder<Stack<SignerLayer<S>, L>, F, N> {
        self.layer(SignerLayer::new(signer))
    }

    /// Add gas estimation to the stack being built.
    ///
    /// See [`GasFiller`]
    pub fn with_gas_estimation(self) -> ProviderBuilder<L, JoinFill<F, GasFiller, N>, N> {
        self.filler(GasFiller)
    }

    /// Add nonce management to the stack being built.
    ///
    /// See [`NonceManager`]
    pub fn with_nonce_management(self) -> ProviderBuilder<L, JoinFill<F, NonceFiller, N>, N> {
        self.filler(NonceFiller::default())
    }

    // /// Add preconfigured set of layers handling gas estimation and nonce management
    // pub fn with_recommended_layers(
    //     self,
    // ) -> ProviderBuilder<Stack<NonceManagerLayer, Stack<GasEstimatorLayer, L>>, N> {
    //     self.with_gas_estimation().with_nonce_management()
    // }

    /// Change the network.
    ///
    /// By default, the network is `Ethereum`. This method must be called to configure a different
    /// network.
    ///
    /// ```ignore
    /// builder.network::<Arbitrum>()
    /// ```
    pub fn network<Net: Network>(self) -> ProviderBuilder<L, F, Net> {
        ProviderBuilder { layer: self.layer, filler: self.filler, network: PhantomData }
    }

    /// Finish the layer stack by providing a root [`Provider`], outputting
    /// the final [`Provider`] type with all stack components.
    pub fn on_provider<P, T>(self, provider: P) -> L::Provider
    where
        L: ProviderLayer<P, T, N>,
        P: Provider<T, N>,
        T: Transport + Clone,
        N: Network,
    {
        self.layer.layer(provider)
    }

    /// Finish the layer stack by providing a root [`RpcClient`], outputting
    /// the final [`Provider`] type with all stack components.
    ///
    /// This is a convenience function for
    /// `ProviderBuilder::provider<RpcClient>`.
    pub fn on_client<T>(self, client: RpcClient<T>) -> L::Provider
    where
        L: ProviderLayer<RootProvider<T, N>, T, N>,
        T: Transport + Clone,
        N: Network,
    {
        self.on_provider(RootProvider::new(client))
    }

    /// Finish the layer stack by providing a connection string for a built-in
    /// transport type, outputting the final [`Provider`] type with all stack
    /// components.
    pub async fn on_builtin(self, s: &str) -> Result<L::Provider, TransportError>
    where
        L: ProviderLayer<RootProvider<BoxTransport, N>, BoxTransport, N>,
        N: Network,
    {
        let connect: BuiltInConnectionString = s.parse()?;
        let client = ClientBuilder::default().connect_boxed(connect).await?;
        Ok(self.on_client(client))
    }

    /// Build this provider with a websocket connection.
    #[cfg(feature = "ws")]
    pub async fn on_ws(
        self,
        connect: alloy_transport_ws::WsConnect,
    ) -> Result<L::Provider, TransportError>
    where
        L: ProviderLayer<
            RootProvider<alloy_pubsub::PubSubFrontend, N>,
            alloy_pubsub::PubSubFrontend,
            N,
        >,
        N: Network,
    {
        let client = ClientBuilder::default().ws(connect).await?;
        Ok(self.on_client(client))
    }

    /// Build this provider with an IPC connection.
    #[cfg(feature = "ipc")]
    pub async fn on_ipc<T>(
        self,
        connect: alloy_transport_ipc::IpcConnect<T>,
    ) -> Result<L::Provider, TransportError>
    where
        alloy_transport_ipc::IpcConnect<T>: alloy_pubsub::PubSubConnect,
        L: ProviderLayer<
            RootProvider<alloy_pubsub::PubSubFrontend, N>,
            alloy_pubsub::PubSubFrontend,
            N,
        >,
        N: Network,
    {
        let client = ClientBuilder::default().ipc(connect).await?;
        Ok(self.on_client(client))
    }

    /// Build this provider with an Reqwest HTTP transport.
    #[cfg(feature = "reqwest")]
    pub fn on_http(self, url: url::Url) -> Result<L::Provider, TransportError>
    where
        L: ProviderLayer<crate::ReqwestProvider<N>, alloy_transport_http::Http<reqwest::Client>, N>,
        N: Network,
    {
        let client = ClientBuilder::default().http(url);
        Ok(self.on_client(client))
    }

    /// Build this provider with an Hyper HTTP transport.
    #[cfg(feature = "hyper")]
    pub fn on_hyper_http(self, url: url::Url) -> Result<L::Provider, TransportError>
    where
        L: ProviderLayer<
            crate::HyperProvider<N>,
            alloy_transport_http::Http<alloy_transport_http::HyperClient>,
            N,
        >,
        N: Network,
    {
        let client = ClientBuilder::default().hyper_http(url);
        Ok(self.on_client(client))
    }
}

// Copyright (c) 2019 Tower Contributors

// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without
// limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software
// is furnished to do so, subject to the following
// conditions:

// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
// ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
// SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
// IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.
