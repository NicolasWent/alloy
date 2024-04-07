searchState.loadedDescShard("alloy_rpc_types_engine", 0, "Engine API types: …\nThe list of all supported Engine capabilities available …\nFields introduced in <code>engine_newPayloadV3</code> that are not …\nContains the error value\nRepresents possible variants of a processed forkchoice …\nThis structure encapsulates the fork choice state\nA standalone forkchoice update errors for RPC.\nRepresents a successfully <em>processed</em> forkchoice state …\ninvalid forkchoice state error code.\ninvalid forkchoice state error message.\ninvalid payload attributes error code.\ninvalid payload attributes error message.\nThe given ForkchoiceState is invalid or inconsistent.\nA container type for CancunPayloadFields that may or may …\nContains the success value\nThis structure maps for the return value of …\nOptimism Payload Attributes\nThis structure contains configurable settings of the …\nThrown when a forkchoice final block does not exist in the …\nThe forkchoice update has been processed, but the …\nThe blobs, commitments, and proofs associated with the …\nThe expected value to be received by the feeRecipient in …\nContains types related to the Cancun hardfork that will be …\nExecution payload V3\nHash of finalized block.\nIf set, this sets the exact gas limit the block produced …\nHash of the head block.\nIf true, the no transactions are taken out of the tx-pool, …\nThe parent beacon block root.\nEcotone parent beacon block root\nPayload types.\nThe payload attributes\nThe identifier of the payload build process that was …\nRepresents the outcome of the validation of the payload, …\nHash of the safe block.\nIntroduced in V3, this represents a suggestion from the …\nMaps on TERMINAL_BLOCK_HASH parameter of EIP-3675\nMaps on TERMINAL_BLOCK_NUMBER parameter of EIP-3675\nMaps on the TERMINAL_TOTAL_DIFFICULTY parameter of EIP-3675\nTransactions is a field for rollups: the transactions list …\nThe expected blob versioned hashes.\nFields introduced in <code>engine_newPayloadV3</code> that are not …\nA container type for CancunPayloadFields that may or may …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>MaybeCancunPayloadFields</code> with the given …\nReturns a new <code>MaybeCancunPayloadFields</code> with no cancun …\nReturns the parent beacon block root, if any.\nThe parent beacon block root.\nReturns the blob versioned hashes, if any.\nThe expected blob versioned hashes.\nContains the error value\nRepresents possible variants of a processed forkchoice …\nThis structure encapsulates the fork choice state\nA standalone forkchoice update errors for RPC.\nRepresents a successfully <em>processed</em> forkchoice state …\ninvalid forkchoice state error code.\ninvalid forkchoice state error message.\ninvalid payload attributes error code.\ninvalid payload attributes error message.\nThe given ForkchoiceState is invalid or inconsistent.\nContains the success value\nThrown when a forkchoice final block does not exist in the …\nThe forkchoice update has been processed, but the …\nHash of finalized block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new ForkchoiceUpdated with the given …\nHash of the head block.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the payload status is invalid.\nReturns true if the payload status is syncing.\nReturns true if the payload status is valid.\nCreates a new ForkchoiceUpdated with the given …\nThe identifier of the payload build process that was …\nRepresents the outcome of the validation of the payload, …\nHash of the safe block.\nSets the latest valid hash of the payload status.\nSets the payload id of the created payload job.\nThis structure maps for the return value of …\nOptimism Payload Attributes\nThe blobs, commitments, and proofs associated with the …\nThe expected value to be received by the feeRecipient in …\nExecution payload V3\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf set, this sets the exact gas limit the block produced …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf true, the no transactions are taken out of the tx-pool, …\nEcotone parent beacon block root\nThe payload attributes\nIntroduced in V3, this represents a suggestion from the …\nTransactions is a field for rollups: the transactions list …\nACCEPTED is returned by the engine API in the following …\nInvalid payload base fee.\nInvalid payload blob gas used.\nThis includes all bundled blob related data of an executed …\nInvalid payload block hash.\nEncountered decoding error.\nInvalid payload excess blob gas.\nAn execution payload, which can be either …\nThe execution payload body response that allows for <code>null</code> …\nThis structure contains a body of an execution payload.\nThis structure maps for the return value of …\nThis structure maps for the return value of …\nThis represents the <code>executionPayload</code> field in the return …\nThis is the input to <code>engine_newPayloadV2</code>, which may or may …\nThis structure maps on the ExecutionPayload structure of …\nThis structure maps on the ExecutionPayloadV2 structure of …\nThis structure maps on the ExecutionPayloadV3 structure of …\nInvalid payload extra data.\nINVALID is returned by the engine API in the following …\nThrown when a new payload contains a wrong block number.\nThrown when a new payload contains a wrong state root\nExpected blob versioned hashes do not match the given …\nThrown when a forkchoice update’s head links to a …\nThis structure contains the attributes required to …\nError that can occur when handling payloads.\nAnd 8-byte identifier for an execution payload.\nThis structure contains the result of processing a payload …\nRepresents the status response of a payload.\nVarious errors that can occur when validating a payload or …\nPre-cancun Payload has blob transactions.\nSYNCING is returned by the engine API in the following …\nV1 payload\nV1 payload\nV2 payload\nV2 payload\nV3 payload\nVALID is returned by the engine API in the following calls:\nReturns the string representation of the payload status.\nReturns a reference to the V1 payload.\nReturns a mutable reference to the V1 payload.\nReturns a reference to the V2 payload, if any.\nReturns a mutable reference to the V2 payload, if any.\nReturns a reference to the V2 payload, if any.\nReturns a mutable reference to the V2 payload, if any.\nThe base fee per gas of the block.\nArray of hex <code>u64</code> representing blob gas used, enabled with …\nAll blobs in the bundle.\nThe blobs, commitments, and proofs associated with the …\nReturns the block hash for the payload.\nThe block hash of the block.\nReturns the block number for this payload.\nThe block number.\nThe expected value to be received by the feeRecipient in …\nThe expected value to be received by the feeRecipient in …\nAll commitments in the bundle.\nArray of hex<code>u64</code> representing excess blob gas, enabled with …\nThe V1 execution payload\nExecution payload, which could be either V1 or V2\nExecution payload V3\nThe extra data of the block.\nThe fee recipient of the block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new payload status from the given status.\nThe gas limit of the block.\nThe gas used of the block.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the payload and returns the V1 payload.\nReturns the inner ExecutionPayloadV1\nReturns the ExecutionPayload for the <code>engine_getPayloadV1</code> …\nReturns <code>true</code> if the error is caused by a block hash …\nReturns true if the payload status is invalid.\nReturns true if the payload status is invalid.\nReturns <code>true</code> if the error is caused by invalid block …\nReturns true if the payload status is syncing.\nReturns true if the payload status is syncing.\nReturns true if the payload status is valid.\nReturns true if the payload status is valid.\nHash of the most recent valid block in the branch defined …\nThe logs bloom of the block.\nSets the latest valid hash if it’s not None.\nCreates a new payload id from the given identifier.\nCreates a new blob bundle from the given sidecars.\nInitializes a new payload status.\nRoot of the parent beacon block enabled with V3.\nReturns the parent hash for the payload.\nThe parent hash of the block.\nInner V1 payload\nInner V2 payload\nReturns the sidecar from the bundle\nReturns the prev randao for this payload.\nThe previous randao of the block.\nValue for the <code>prevRandao</code> field of the new payload\nAll proofs in the bundle.\nThe receipts root of the block.\nIntroduced in V3, this represents a suggestion from the …\nThe state root of the block.\nThe status of the payload.\nSuggested value for the <code>feeRecipient</code> field of the new …\nTake <code>len</code> blob data from the bundle.\nReturns the timestamp for the execution payload.\nReturns the timestamp for the payload.\nReturns the timestamp for the payload.\nThe timestamp of the block.\nValue for the <code>timestamp</code> field of the new payload\nThe transactions of the block.\nEnveloped encoded transactions.\nReturns the validation error if the payload status is …\nSets the latest valid hash.\nReturns the withdrawals for the payload.\nReturns the withdrawals for the payload.\nThe payload withdrawals\nArray of <code>Withdrawal</code> enabled with V2 See …\nAll withdrawals in the block.\nArray of <code>Withdrawal</code> enabled with V2 See …\nThe block hash provided with the payload.\nThe block hash computed from the payload.\nThe error message for the invalid payload.\nThe state root of the payload that we computed locally.\nThe state root of the payload we received from remote (CL)\nThis structure contains configurable settings of the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMaps on TERMINAL_BLOCK_HASH parameter of EIP-3675\nMaps on TERMINAL_BLOCK_NUMBER parameter of EIP-3675\nMaps on the TERMINAL_TOTAL_DIFFICULTY parameter of EIP-3675")