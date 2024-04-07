(function() {var type_impls = {
"alloy_json_rpc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#108\">source</a><a href=\"#impl-Clone-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#108\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy_json_rpc::packet::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#108\">source</a><a href=\"#impl-Debug-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#108\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy_json_rpc::packet::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#146-195\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, Payload, ErrData&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    ErrData: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#151-194\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(deserializer: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","alloy_json_rpc::packet::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CResponse%3CPayload,+ErrData%3E%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#136-144\">source</a><a href=\"#impl-From%3CVec%3CResponse%3CPayload,+ErrData%3E%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"alloy_json_rpc/response/struct.Response.html\" title=\"struct alloy_json_rpc::response::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;&gt; for <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#137-143\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"alloy_json_rpc/response/struct.Response.html\" title=\"struct alloy_json_rpc::response::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Response<Payload, ErrData>>>","alloy_json_rpc::packet::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3CResponse%3CPayload,+ErrData%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#116-134\">source</a><a href=\"#impl-FromIterator%3CResponse%3CPayload,+ErrData%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"alloy_json_rpc/response/struct.Response.html\" title=\"struct alloy_json_rpc::response::Response\">Response</a>&lt;Payload, ErrData&gt;&gt; for <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#119-133\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"alloy_json_rpc/response/struct.Response.html\" title=\"struct alloy_json_rpc::response::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;&gt;(\n    iter: T\n) -&gt; Self</h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<Response<Payload, ErrData>>","alloy_json_rpc::packet::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#219-278\">source</a><a href=\"#impl-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"enum\" href=\"alloy_json_rpc/packet/enum.ResponsePacket.html\" title=\"enum alloy_json_rpc::packet::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_success\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#223-228\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/packet/enum.ResponsePacket.html#tymethod.is_success\" class=\"fn\">is_success</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is a success.</p>\n<p>For batch responses, this returns <code>true</code> if <strong>all</strong> responses are successful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_error\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#233-238\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/packet/enum.ResponsePacket.html#tymethod.is_error\" class=\"fn\">is_error</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is an error.</p>\n<p>For batch responses, this returns <code>true</code> there’s at least one error response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_error\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#243-245\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/packet/enum.ResponsePacket.html#tymethod.as_error\" class=\"fn\">as_error</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"alloy_json_rpc/response/error/struct.ErrorPayload.html\" title=\"struct alloy_json_rpc::response::error::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the <a href=\"alloy_json_rpc/response/error/struct.ErrorPayload.html\" title=\"struct alloy_json_rpc::response::error::ErrorPayload\">ErrorPayload</a> if the response is an error.</p>\n<p>For batch responses, this returns the first error response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter_errors\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#248-253\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/packet/enum.ResponsePacket.html#tymethod.iter_errors\" class=\"fn\">iter_errors</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;<a class=\"struct\" href=\"alloy_json_rpc/response/error/struct.ErrorPayload.html\" title=\"struct alloy_json_rpc::response::error::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;&gt; + '_</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over the <a href=\"alloy_json_rpc/response/error/struct.ErrorPayload.html\" title=\"struct alloy_json_rpc::response::error::ErrorPayload\">ErrorPayload</a>s in the response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.responses_by_ids\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/packet.rs.html#266-277\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/packet/enum.ResponsePacket.html#tymethod.responses_by_ids\" class=\"fn\">responses_by_ids</a>(\n    &amp;self,\n    ids: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"enum\" href=\"alloy_json_rpc/common/enum.Id.html\" title=\"enum alloy_json_rpc::common::Id\">Id</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"struct\" href=\"alloy_json_rpc/response/struct.Response.html\" title=\"struct alloy_json_rpc::response::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Find responses by a list of IDs.</p>\n<p>This is intended to be used in conjunction with\n<a href=\"alloy_json_rpc/packet/enum.RequestPacket.html#method.subscription_request_ids\" title=\"method alloy_json_rpc::packet::RequestPacket::subscription_request_ids\"><code>RequestPacket::subscription_request_ids</code></a> to identify subscription\nresponses.</p>\n<h5 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h5>\n<ul>\n<li>Responses are not guaranteed to be in the same order.</li>\n<li>Responses are not guaranteed to be in the set.</li>\n<li>If the packet contains duplicate IDs, both will be found.</li>\n</ul>\n</div></details></div></details>",0,"alloy_json_rpc::packet::BorrowedResponsePacket"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()