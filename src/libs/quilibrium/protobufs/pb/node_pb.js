// source: node.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var clock_pb = require('./clock_pb.js');
goog.object.extend(proto, clock_pb);
var keys_pb = require('./keys_pb.js');
goog.object.extend(proto, keys_pb);
goog.exportSymbol('proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AccountAllowanceRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AccountRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AccountRef.AccountCase', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AllowAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AllowAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AllowCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AllowCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AnnounceProverJoin', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AnnounceProverLeave', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AnnounceProverPause', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AnnounceProverRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.AnnounceProverResume', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.BalanceAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.BalanceAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.Capability', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.Coin', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.CoinAllowanceRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.CoinInfo', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.CoinRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.CoinsAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.CoinsAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.Confirmation', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableMintCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DeliveryData', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.DeliveryMethod', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.FrameInfoResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.FramesResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetFrameInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetFramesRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetNetworkInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetNodeInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetPeerInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetPeerManifestsRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetTokenInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.GetTokensByAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.ImplicitAccount', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.InlineKey', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.IntersectCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.IntersectCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.KeyRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.KeyRing', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MergeCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MergeCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MintCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MintCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MutualReceiveCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MutualReceiveCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MutualTransferCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.MutualTransferCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.NetworkInfo', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.NetworkInfoResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.NodeInfoResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.OriginatedAccountRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PeerInfo', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PeerInfoResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PeerManifest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PeerManifestsResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PendingTransactionInfo', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PendingTransactionRef', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PreCoinProof', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PutNodeInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PutPeerInfoRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.PutResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RejectPendingTransactionRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RejectPendingTransactionResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RevokeAccountRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RevokeAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RevokeCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.RevokeCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SelfTestReport', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SendMessageResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.Signature', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SplitCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SplitCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SyncRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.SyncResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenInfoResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenOutput', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenOutput.OutputCase', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenOutputs', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenRequest.RequestCase', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokenRequests', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TokensByAccountResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TransferCoinRequest', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.TransferCoinResponse', null, global);
goog.exportSymbol('proto.quilibrium.node.node.pb.ValidationMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetFramesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetFramesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetFramesRequest.displayName = 'proto.quilibrium.node.node.pb.GetFramesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetFrameInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetFrameInfoRequest.displayName = 'proto.quilibrium.node.node.pb.GetFrameInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetPeerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetPeerInfoRequest.displayName = 'proto.quilibrium.node.node.pb.GetPeerInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetNodeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetNodeInfoRequest.displayName = 'proto.quilibrium.node.node.pb.GetNodeInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetNetworkInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetNetworkInfoRequest.displayName = 'proto.quilibrium.node.node.pb.GetNetworkInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.FramesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.FramesResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.FramesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.FramesResponse.displayName = 'proto.quilibrium.node.node.pb.FramesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.FrameInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.FrameInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.FrameInfoResponse.displayName = 'proto.quilibrium.node.node.pb.FrameInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PeerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PeerInfo.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PeerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PeerInfo.displayName = 'proto.quilibrium.node.node.pb.PeerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PeerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PeerInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PeerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PeerInfoResponse.displayName = 'proto.quilibrium.node.node.pb.PeerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.NetworkInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.NetworkInfo.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.NetworkInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.NetworkInfo.displayName = 'proto.quilibrium.node.node.pb.NetworkInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.NodeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.NodeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.NodeInfoResponse.displayName = 'proto.quilibrium.node.node.pb.NodeInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PutPeerInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PutPeerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PutPeerInfoRequest.displayName = 'proto.quilibrium.node.node.pb.PutPeerInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PutNodeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PutNodeInfoRequest.displayName = 'proto.quilibrium.node.node.pb.PutNodeInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PutResponse.displayName = 'proto.quilibrium.node.node.pb.PutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.NetworkInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.NetworkInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.NetworkInfoResponse.displayName = 'proto.quilibrium.node.node.pb.NetworkInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetTokenInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetTokenInfoRequest.displayName = 'proto.quilibrium.node.node.pb.GetTokenInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokenInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TokenInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokenInfoResponse.displayName = 'proto.quilibrium.node.node.pb.TokenInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.Capability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.Capability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.Capability.displayName = 'proto.quilibrium.node.node.pb.Capability';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SelfTestReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.SelfTestReport.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SelfTestReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SelfTestReport.displayName = 'proto.quilibrium.node.node.pb.SelfTestReport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.ValidationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.ValidationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.ValidationMessage.displayName = 'proto.quilibrium.node.node.pb.ValidationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SyncRequest.displayName = 'proto.quilibrium.node.node.pb.SyncRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SyncResponse.displayName = 'proto.quilibrium.node.node.pb.SyncResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetPeerManifestsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetPeerManifestsRequest.displayName = 'proto.quilibrium.node.node.pb.GetPeerManifestsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PeerManifest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PeerManifest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PeerManifest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PeerManifest.displayName = 'proto.quilibrium.node.node.pb.PeerManifest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.AnnounceProverRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AnnounceProverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AnnounceProverRequest.displayName = 'proto.quilibrium.node.node.pb.AnnounceProverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AnnounceProverJoin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AnnounceProverJoin.displayName = 'proto.quilibrium.node.node.pb.AnnounceProverJoin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AnnounceProverLeave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AnnounceProverLeave.displayName = 'proto.quilibrium.node.node.pb.AnnounceProverLeave';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AnnounceProverPause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AnnounceProverPause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AnnounceProverPause.displayName = 'proto.quilibrium.node.node.pb.AnnounceProverPause';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AnnounceProverResume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AnnounceProverResume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AnnounceProverResume.displayName = 'proto.quilibrium.node.node.pb.AnnounceProverResume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.OriginatedAccountRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.OriginatedAccountRef.displayName = 'proto.quilibrium.node.node.pb.OriginatedAccountRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.ImplicitAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.ImplicitAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.ImplicitAccount.displayName = 'proto.quilibrium.node.node.pb.ImplicitAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AccountRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quilibrium.node.node.pb.AccountRef.oneofGroups_);
};
goog.inherits(proto.quilibrium.node.node.pb.AccountRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AccountRef.displayName = 'proto.quilibrium.node.node.pb.AccountRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AccountAllowanceRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AccountAllowanceRef.displayName = 'proto.quilibrium.node.node.pb.AccountAllowanceRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.CoinAllowanceRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.CoinAllowanceRef.displayName = 'proto.quilibrium.node.node.pb.CoinAllowanceRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.Coin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.Coin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.Coin.displayName = 'proto.quilibrium.node.node.pb.Coin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_);
};
goog.inherits(proto.quilibrium.node.node.pb.TokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokenRequest.displayName = 'proto.quilibrium.node.node.pb.TokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokenRequests = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.TokenRequests.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TokenRequests, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokenRequests.displayName = 'proto.quilibrium.node.node.pb.TokenRequests';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PreCoinProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PreCoinProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PreCoinProof.displayName = 'proto.quilibrium.node.node.pb.PreCoinProof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokenOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_);
};
goog.inherits(proto.quilibrium.node.node.pb.TokenOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokenOutput.displayName = 'proto.quilibrium.node.node.pb.TokenOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokenOutputs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.TokenOutputs.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TokenOutputs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokenOutputs.displayName = 'proto.quilibrium.node.node.pb.TokenOutputs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.CoinRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.CoinRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.CoinRef.displayName = 'proto.quilibrium.node.node.pb.CoinRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PendingTransactionRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PendingTransactionRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PendingTransactionRef.displayName = 'proto.quilibrium.node.node.pb.PendingTransactionRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.KeyRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.KeyRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.KeyRef.displayName = 'proto.quilibrium.node.node.pb.KeyRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.Signature.displayName = 'proto.quilibrium.node.node.pb.Signature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PeerManifestsResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PeerManifestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PeerManifestsResponse.displayName = 'proto.quilibrium.node.node.pb.PeerManifestsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.displayName = 'proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AllowAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.AllowAccountRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AllowAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AllowAccountRequest.displayName = 'proto.quilibrium.node.node.pb.AllowAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AllowCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.AllowCoinRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AllowCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AllowCoinRequest.displayName = 'proto.quilibrium.node.node.pb.AllowCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.BalanceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.BalanceAccountRequest.displayName = 'proto.quilibrium.node.node.pb.BalanceAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.CoinsAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.CoinsAccountRequest.displayName = 'proto.quilibrium.node.node.pb.CoinsAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.displayName = 'proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.IntersectCoinRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.IntersectCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.IntersectCoinRequest.displayName = 'proto.quilibrium.node.node.pb.IntersectCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MergeCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MergeCoinRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MergeCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MergeCoinRequest.displayName = 'proto.quilibrium.node.node.pb.MergeCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MintCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MintCoinRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MintCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MintCoinRequest.displayName = 'proto.quilibrium.node.node.pb.MintCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MutualReceiveCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.displayName = 'proto.quilibrium.node.node.pb.MutualReceiveCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MutualTransferCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MutualTransferCoinRequest.displayName = 'proto.quilibrium.node.node.pb.MutualTransferCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RevokeAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RevokeAccountRequest.displayName = 'proto.quilibrium.node.node.pb.RevokeAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RevokeCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RevokeCoinRequest.displayName = 'proto.quilibrium.node.node.pb.RevokeCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SplitCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.SplitCoinRequest.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SplitCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SplitCoinRequest.displayName = 'proto.quilibrium.node.node.pb.SplitCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TransferCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TransferCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TransferCoinRequest.displayName = 'proto.quilibrium.node.node.pb.TransferCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.displayName = 'proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RejectPendingTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.displayName = 'proto.quilibrium.node.node.pb.RejectPendingTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.InlineKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.InlineKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.InlineKey.displayName = 'proto.quilibrium.node.node.pb.InlineKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.KeyRing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.KeyRing.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.KeyRing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.KeyRing.displayName = 'proto.quilibrium.node.node.pb.KeyRing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.Confirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.Confirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.Confirmation.displayName = 'proto.quilibrium.node.node.pb.Confirmation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DeliveryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DeliveryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DeliveryData.displayName = 'proto.quilibrium.node.node.pb.DeliveryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DeliveryMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DeliveryMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DeliveryMethod.displayName = 'proto.quilibrium.node.node.pb.DeliveryMethod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableMintCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableMintCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.displayName = 'proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.CoinInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.CoinInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.CoinInfo.displayName = 'proto.quilibrium.node.node.pb.CoinInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PendingTransactionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PendingTransactionInfo.displayName = 'proto.quilibrium.node.node.pb.PendingTransactionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AllowAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.AllowAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AllowAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AllowAccountResponse.displayName = 'proto.quilibrium.node.node.pb.AllowAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.BalanceAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.BalanceAccountResponse.displayName = 'proto.quilibrium.node.node.pb.BalanceAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.CoinsAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.CoinsAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.CoinsAccountResponse.displayName = 'proto.quilibrium.node.node.pb.CoinsAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.displayName = 'proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.RevokeAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RevokeAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RevokeAccountResponse.displayName = 'proto.quilibrium.node.node.pb.RevokeAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.AllowCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.AllowCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.AllowCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.AllowCoinResponse.displayName = 'proto.quilibrium.node.node.pb.AllowCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.IntersectCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.IntersectCoinResponse.displayName = 'proto.quilibrium.node.node.pb.IntersectCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MergeCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MergeCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MergeCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MergeCoinResponse.displayName = 'proto.quilibrium.node.node.pb.MergeCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MintCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MintCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MintCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MintCoinResponse.displayName = 'proto.quilibrium.node.node.pb.MintCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MutualReceiveCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.displayName = 'proto.quilibrium.node.node.pb.MutualReceiveCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.MutualTransferCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.MutualTransferCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.MutualTransferCoinResponse.displayName = 'proto.quilibrium.node.node.pb.MutualTransferCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.RevokeCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RevokeCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RevokeCoinResponse.displayName = 'proto.quilibrium.node.node.pb.RevokeCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SplitCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.SplitCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SplitCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SplitCoinResponse.displayName = 'proto.quilibrium.node.node.pb.SplitCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TransferCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.TransferCoinResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TransferCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TransferCoinResponse.displayName = 'proto.quilibrium.node.node.pb.TransferCoinResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.displayName = 'proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.RejectPendingTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.displayName = 'proto.quilibrium.node.node.pb.RejectPendingTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.SendMessageResponse.displayName = 'proto.quilibrium.node.node.pb.SendMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetTokensByAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetTokensByAccountRequest.displayName = 'proto.quilibrium.node.node.pb.GetTokensByAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.TokensByAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.TokensByAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.TokensByAccountResponse.displayName = 'proto.quilibrium.node.node.pb.TokensByAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.displayName = 'proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.displayName = 'proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetFramesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetFramesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetFramesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    fromFrameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    toFrameNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeCandidates: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetFramesRequest;
  return proto.quilibrium.node.node.pb.GetFramesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetFramesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromFrameNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setToFrameNumber(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCandidates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetFramesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetFramesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetFramesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFromFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getToFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIncludeCandidates();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 from_frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getFromFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.setFromFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 to_frame_number = 3;
 * @return {number}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getToFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.setToFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool include_candidates = 4;
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.getIncludeCandidates = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quilibrium.node.node.pb.GetFramesRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFramesRequest.prototype.setIncludeCandidates = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetFrameInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    frameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    selector: msg.getSelector_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetFrameInfoRequest}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetFrameInfoRequest;
  return proto.quilibrium.node.node.pb.GetFrameInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetFrameInfoRequest}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetFrameInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSelector_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes selector = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getSelector = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes selector = 3;
 * This is a type-conversion wrapper around `getSelector()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getSelector_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSelector()));
};


/**
 * optional bytes selector = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSelector()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.getSelector_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSelector()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetFrameInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.GetFrameInfoRequest.prototype.setSelector = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetPeerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetPeerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetPeerInfoRequest}
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetPeerInfoRequest;
  return proto.quilibrium.node.node.pb.GetPeerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetPeerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetPeerInfoRequest}
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetPeerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetPeerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPeerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetNodeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetNodeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetNodeInfoRequest}
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetNodeInfoRequest;
  return proto.quilibrium.node.node.pb.GetNodeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetNodeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetNodeInfoRequest}
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetNodeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetNodeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetNodeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetNetworkInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetNetworkInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetNetworkInfoRequest}
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetNetworkInfoRequest;
  return proto.quilibrium.node.node.pb.GetNetworkInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetNetworkInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetNetworkInfoRequest}
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetNetworkInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetNetworkInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetNetworkInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.FramesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.FramesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.FramesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.FramesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.FramesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    truncatedClockFramesList: jspb.Message.toObjectList(msg.getTruncatedClockFramesList(),
    clock_pb.ClockFrame.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.FramesResponse}
 */
proto.quilibrium.node.node.pb.FramesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.FramesResponse;
  return proto.quilibrium.node.node.pb.FramesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.FramesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.FramesResponse}
 */
proto.quilibrium.node.node.pb.FramesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new clock_pb.ClockFrame;
      reader.readMessage(value,clock_pb.ClockFrame.deserializeBinaryFromReader);
      msg.addTruncatedClockFrames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.FramesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.FramesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.FramesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.FramesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTruncatedClockFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      clock_pb.ClockFrame.serializeBinaryToWriter
    );
  }
};


/**
 * repeated quilibrium.node.clock.pb.ClockFrame truncated_clock_frames = 1;
 * @return {!Array<!proto.quilibrium.node.clock.pb.ClockFrame>}
 */
proto.quilibrium.node.node.pb.FramesResponse.prototype.getTruncatedClockFramesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.clock.pb.ClockFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, clock_pb.ClockFrame, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.clock.pb.ClockFrame>} value
 * @return {!proto.quilibrium.node.node.pb.FramesResponse} returns this
*/
proto.quilibrium.node.node.pb.FramesResponse.prototype.setTruncatedClockFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.clock.pb.ClockFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.clock.pb.ClockFrame}
 */
proto.quilibrium.node.node.pb.FramesResponse.prototype.addTruncatedClockFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.clock.pb.ClockFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.FramesResponse} returns this
 */
proto.quilibrium.node.node.pb.FramesResponse.prototype.clearTruncatedClockFramesList = function() {
  return this.setTruncatedClockFramesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.FrameInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.FrameInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clockFrame: (f = msg.getClockFrame()) && clock_pb.ClockFrame.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.FrameInfoResponse}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.FrameInfoResponse;
  return proto.quilibrium.node.node.pb.FrameInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.FrameInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.FrameInfoResponse}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new clock_pb.ClockFrame;
      reader.readMessage(value,clock_pb.ClockFrame.deserializeBinaryFromReader);
      msg.setClockFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.FrameInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.FrameInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClockFrame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      clock_pb.ClockFrame.serializeBinaryToWriter
    );
  }
};


/**
 * optional quilibrium.node.clock.pb.ClockFrame clock_frame = 1;
 * @return {?proto.quilibrium.node.clock.pb.ClockFrame}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.getClockFrame = function() {
  return /** @type{?proto.quilibrium.node.clock.pb.ClockFrame} */ (
    jspb.Message.getWrapperField(this, clock_pb.ClockFrame, 1));
};


/**
 * @param {?proto.quilibrium.node.clock.pb.ClockFrame|undefined} value
 * @return {!proto.quilibrium.node.node.pb.FrameInfoResponse} returns this
*/
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.setClockFrame = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.FrameInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.clearClockFrame = function() {
  return this.setClockFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.FrameInfoResponse.prototype.hasClockFrame = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PeerInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PeerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PeerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: msg.getPeerId_asB64(),
    multiaddrsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    maxFrame: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    version: msg.getVersion_asB64(),
    signature: msg.getSignature_asB64(),
    publicKey: msg.getPublicKey_asB64(),
    totalDistance: msg.getTotalDistance_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PeerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PeerInfo;
  return proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PeerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMultiaddrs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxFrame(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTotalDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PeerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMultiaddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMaxFrame();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getVersion_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getTotalDistance_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional bytes peer_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPeerId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes peer_id = 1;
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPeerId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerId()));
};


/**
 * optional bytes peer_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPeerId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string multiaddrs = 2;
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getMultiaddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setMultiaddrsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.addMultiaddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.clearMultiaddrsList = function() {
  return this.setMultiaddrsList([]);
};


/**
 * optional uint64 max_frame = 3;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getMaxFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setMaxFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes version = 5;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes version = 5;
 * This is a type-conversion wrapper around `getVersion()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVersion()));
};


/**
 * optional bytes version = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVersion()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes signature = 6;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes signature = 6;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes public_key = 7;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes public_key = 7;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes total_distance = 8;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getTotalDistance = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes total_distance = 8;
 * This is a type-conversion wrapper around `getTotalDistance()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getTotalDistance_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTotalDistance()));
};


/**
 * optional bytes total_distance = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTotalDistance()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.getTotalDistance_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTotalDistance()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfo} returns this
 */
proto.quilibrium.node.node.pb.PeerInfo.prototype.setTotalDistance = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PeerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PeerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerInfoList: jspb.Message.toObjectList(msg.getPeerInfoList(),
    proto.quilibrium.node.node.pb.PeerInfo.toObject, includeInstance),
    uncooperativePeerInfoList: jspb.Message.toObjectList(msg.getUncooperativePeerInfoList(),
    proto.quilibrium.node.node.pb.PeerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PeerInfoResponse;
  return proto.quilibrium.node.node.pb.PeerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PeerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PeerInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader);
      msg.addPeerInfo(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.PeerInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader);
      msg.addUncooperativePeerInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PeerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PeerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter
    );
  }
  f = message.getUncooperativePeerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PeerInfo peer_info = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.PeerInfo>}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.getPeerInfoList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PeerInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PeerInfo>} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse} returns this
*/
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.setPeerInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.addPeerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.PeerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.clearPeerInfoList = function() {
  return this.setPeerInfoList([]);
};


/**
 * repeated PeerInfo uncooperative_peer_info = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.PeerInfo>}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.getUncooperativePeerInfoList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PeerInfo, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PeerInfo>} value
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse} returns this
*/
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.setUncooperativePeerInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.addUncooperativePeerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.PeerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PeerInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.PeerInfoResponse.prototype.clearUncooperativePeerInfoList = function() {
  return this.setUncooperativePeerInfoList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.NetworkInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.NetworkInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.NetworkInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NetworkInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: msg.getPeerId_asB64(),
    multiaddrsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    peerScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo}
 */
proto.quilibrium.node.node.pb.NetworkInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.NetworkInfo;
  return proto.quilibrium.node.node.pb.NetworkInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.NetworkInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo}
 */
proto.quilibrium.node.node.pb.NetworkInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMultiaddrs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPeerScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.NetworkInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.NetworkInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NetworkInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMultiaddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPeerScore();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional bytes peer_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.getPeerId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes peer_id = 1;
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.getPeerId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerId()));
};


/**
 * optional bytes peer_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.getPeerId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string multiaddrs = 2;
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.getMultiaddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.setMultiaddrsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.addMultiaddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.clearMultiaddrsList = function() {
  return this.setMultiaddrsList([]);
};


/**
 * optional double peer_score = 3;
 * @return {number}
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.getPeerScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfo.prototype.setPeerScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.NodeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.NodeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxFrame: jspb.Message.getFieldWithDefault(msg, 2, 0),
    peerScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: msg.getVersion_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.NodeInfoResponse;
  return proto.quilibrium.node.node.pb.NodeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.NodeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxFrame(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPeerScore(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.NodeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.NodeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxFrame();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPeerScore();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getVersion_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string peer_id = 1;
 * @return {string}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 max_frame = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getMaxFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.setMaxFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 peer_score = 3;
 * @return {number}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getPeerScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.setPeerScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes version = 4;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes version = 4;
 * This is a type-conversion wrapper around `getVersion()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVersion()));
};


/**
 * optional bytes version = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVersion()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.getVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.NodeInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.NodeInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PutPeerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerInfoList: jspb.Message.toObjectList(msg.getPeerInfoList(),
    proto.quilibrium.node.node.pb.PeerInfo.toObject, includeInstance),
    uncooperativePeerInfoList: jspb.Message.toObjectList(msg.getUncooperativePeerInfoList(),
    proto.quilibrium.node.node.pb.PeerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PutPeerInfoRequest;
  return proto.quilibrium.node.node.pb.PutPeerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PeerInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader);
      msg.addPeerInfo(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.PeerInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PeerInfo.deserializeBinaryFromReader);
      msg.addUncooperativePeerInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PutPeerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter
    );
  }
  f = message.getUncooperativePeerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.PeerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PeerInfo peer_info = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.PeerInfo>}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.getPeerInfoList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PeerInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PeerInfo>} value
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} returns this
*/
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.setPeerInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.addPeerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.PeerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.clearPeerInfoList = function() {
  return this.setPeerInfoList([]);
};


/**
 * repeated PeerInfo uncooperative_peer_info = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.PeerInfo>}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.getUncooperativePeerInfoList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PeerInfo, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PeerInfo>} value
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} returns this
*/
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.setUncooperativePeerInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerInfo}
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.addUncooperativePeerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.PeerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PutPeerInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutPeerInfoRequest.prototype.clearUncooperativePeerInfoList = function() {
  return this.setUncooperativePeerInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PutNodeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxFrame: jspb.Message.getFieldWithDefault(msg, 2, 0),
    peerScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PutNodeInfoRequest;
  return proto.quilibrium.node.node.pb.PutNodeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxFrame(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPeerScore(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PutNodeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxFrame();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPeerScore();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string peer_id = 1;
 * @return {string}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 max_frame = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getMaxFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.setMaxFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 peer_score = 3;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getPeerScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.setPeerScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes signature = 4;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes signature = 4;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PutNodeInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.PutNodeInfoRequest.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PutResponse}
 */
proto.quilibrium.node.node.pb.PutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PutResponse;
  return proto.quilibrium.node.node.pb.PutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PutResponse}
 */
proto.quilibrium.node.node.pb.PutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.NetworkInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.NetworkInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkInfoList: jspb.Message.toObjectList(msg.getNetworkInfoList(),
    proto.quilibrium.node.node.pb.NetworkInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfoResponse}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.NetworkInfoResponse;
  return proto.quilibrium.node.node.pb.NetworkInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.NetworkInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfoResponse}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.NetworkInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.NetworkInfo.deserializeBinaryFromReader);
      msg.addNetworkInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.NetworkInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.NetworkInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.NetworkInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NetworkInfo network_info = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.NetworkInfo>}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.getNetworkInfoList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.NetworkInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.NetworkInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.NetworkInfo>} value
 * @return {!proto.quilibrium.node.node.pb.NetworkInfoResponse} returns this
*/
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.setNetworkInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.NetworkInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.NetworkInfo}
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.addNetworkInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.NetworkInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.NetworkInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.NetworkInfoResponse.prototype.clearNetworkInfoList = function() {
  return this.setNetworkInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetTokenInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetTokenInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetTokenInfoRequest}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetTokenInfoRequest;
  return proto.quilibrium.node.node.pb.GetTokenInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetTokenInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetTokenInfoRequest}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetTokenInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetTokenInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetTokenInfoRequest} returns this
 */
proto.quilibrium.node.node.pb.GetTokenInfoRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokenInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokenInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirmedTokenSupply: msg.getConfirmedTokenSupply_asB64(),
    unconfirmedTokenSupply: msg.getUnconfirmedTokenSupply_asB64(),
    ownedTokens: msg.getOwnedTokens_asB64(),
    unconfirmedOwnedTokens: msg.getUnconfirmedOwnedTokens_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokenInfoResponse;
  return proto.quilibrium.node.node.pb.TokenInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokenInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConfirmedTokenSupply(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUnconfirmedTokenSupply(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnedTokens(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUnconfirmedOwnedTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokenInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokenInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirmedTokenSupply_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getUnconfirmedTokenSupply_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOwnedTokens_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getUnconfirmedOwnedTokens_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes confirmed_token_supply = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getConfirmedTokenSupply = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes confirmed_token_supply = 1;
 * This is a type-conversion wrapper around `getConfirmedTokenSupply()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getConfirmedTokenSupply_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConfirmedTokenSupply()));
};


/**
 * optional bytes confirmed_token_supply = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConfirmedTokenSupply()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getConfirmedTokenSupply_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConfirmedTokenSupply()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.setConfirmedTokenSupply = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes unconfirmed_token_supply = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedTokenSupply = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes unconfirmed_token_supply = 2;
 * This is a type-conversion wrapper around `getUnconfirmedTokenSupply()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedTokenSupply_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUnconfirmedTokenSupply()));
};


/**
 * optional bytes unconfirmed_token_supply = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUnconfirmedTokenSupply()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedTokenSupply_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUnconfirmedTokenSupply()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.setUnconfirmedTokenSupply = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes owned_tokens = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getOwnedTokens = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes owned_tokens = 3;
 * This is a type-conversion wrapper around `getOwnedTokens()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getOwnedTokens_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnedTokens()));
};


/**
 * optional bytes owned_tokens = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnedTokens()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getOwnedTokens_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnedTokens()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.setOwnedTokens = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes unconfirmed_owned_tokens = 4;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedOwnedTokens = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes unconfirmed_owned_tokens = 4;
 * This is a type-conversion wrapper around `getUnconfirmedOwnedTokens()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedOwnedTokens_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUnconfirmedOwnedTokens()));
};


/**
 * optional bytes unconfirmed_owned_tokens = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUnconfirmedOwnedTokens()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.getUnconfirmedOwnedTokens_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUnconfirmedOwnedTokens()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.TokenInfoResponse} returns this
 */
proto.quilibrium.node.node.pb.TokenInfoResponse.prototype.setUnconfirmedOwnedTokens = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.Capability.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.Capability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.Capability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Capability.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolIdentifier: jspb.Message.getFieldWithDefault(msg, 1, 0),
    additionalMetadata: msg.getAdditionalMetadata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.Capability}
 */
proto.quilibrium.node.node.pb.Capability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.Capability;
  return proto.quilibrium.node.node.pb.Capability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.Capability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.Capability}
 */
proto.quilibrium.node.node.pb.Capability.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProtocolIdentifier(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAdditionalMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Capability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.Capability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.Capability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Capability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolIdentifier();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAdditionalMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 protocol_identifier = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.Capability.prototype.getProtocolIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.Capability} returns this
 */
proto.quilibrium.node.node.pb.Capability.prototype.setProtocolIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes additional_metadata = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Capability.prototype.getAdditionalMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes additional_metadata = 2;
 * This is a type-conversion wrapper around `getAdditionalMetadata()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Capability.prototype.getAdditionalMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAdditionalMetadata()));
};


/**
 * optional bytes additional_metadata = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAdditionalMetadata()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Capability.prototype.getAdditionalMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAdditionalMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Capability} returns this
 */
proto.quilibrium.node.node.pb.Capability.prototype.setAdditionalMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.SelfTestReport.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SelfTestReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SelfTestReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SelfTestReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    cores: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memory: msg.getMemory_asB64(),
    storage: msg.getStorage_asB64(),
    capabilitiesList: jspb.Message.toObjectList(msg.getCapabilitiesList(),
    proto.quilibrium.node.node.pb.Capability.toObject, includeInstance),
    masterHeadFrame: jspb.Message.getFieldWithDefault(msg, 5, 0),
    proverRange: msg.getProverRange_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport}
 */
proto.quilibrium.node.node.pb.SelfTestReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SelfTestReport;
  return proto.quilibrium.node.node.pb.SelfTestReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SelfTestReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport}
 */
proto.quilibrium.node.node.pb.SelfTestReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCores(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMemory(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStorage(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.Capability;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Capability.deserializeBinaryFromReader);
      msg.addCapabilities(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMasterHeadFrame(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProverRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SelfTestReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SelfTestReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SelfTestReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCores();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMemory_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getStorage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getCapabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.Capability.serializeBinaryToWriter
    );
  }
  f = message.getMasterHeadFrame();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getProverRange_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional uint32 cores = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes memory = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getMemory = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes memory = 2;
 * This is a type-conversion wrapper around `getMemory()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getMemory_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMemory()));
};


/**
 * optional bytes memory = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMemory()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getMemory_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMemory()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setMemory = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes storage = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getStorage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes storage = 3;
 * This is a type-conversion wrapper around `getStorage()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getStorage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStorage()));
};


/**
 * optional bytes storage = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStorage()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getStorage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStorage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setStorage = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated Capability capabilities = 4;
 * @return {!Array<!proto.quilibrium.node.node.pb.Capability>}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getCapabilitiesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.Capability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.Capability, 4));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.Capability>} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
*/
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setCapabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.Capability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.Capability}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.addCapabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.quilibrium.node.node.pb.Capability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.clearCapabilitiesList = function() {
  return this.setCapabilitiesList([]);
};


/**
 * optional uint64 master_head_frame = 5;
 * @return {number}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getMasterHeadFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setMasterHeadFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes prover_range = 6;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getProverRange = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes prover_range = 6;
 * This is a type-conversion wrapper around `getProverRange()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getProverRange_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProverRange()));
};


/**
 * optional bytes prover_range = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProverRange()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.getProverRange_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProverRange()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.SelfTestReport} returns this
 */
proto.quilibrium.node.node.pb.SelfTestReport.prototype.setProverRange = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.ValidationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.ValidationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ValidationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    validation: msg.getValidation_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.ValidationMessage}
 */
proto.quilibrium.node.node.pb.ValidationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.ValidationMessage;
  return proto.quilibrium.node.node.pb.ValidationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.ValidationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.ValidationMessage}
 */
proto.quilibrium.node.node.pb.ValidationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValidation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.ValidationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.ValidationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ValidationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidation_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes validation = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.getValidation = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes validation = 1;
 * This is a type-conversion wrapper around `getValidation()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.getValidation_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValidation()));
};


/**
 * optional bytes validation = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidation()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.getValidation_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValidation()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.ValidationMessage} returns this
 */
proto.quilibrium.node.node.pb.ValidationMessage.prototype.setValidation = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesRequest: (f = msg.getFramesRequest()) && clock_pb.ClockFramesRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SyncRequest}
 */
proto.quilibrium.node.node.pb.SyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SyncRequest;
  return proto.quilibrium.node.node.pb.SyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SyncRequest}
 */
proto.quilibrium.node.node.pb.SyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new clock_pb.ClockFramesRequest;
      reader.readMessage(value,clock_pb.ClockFramesRequest.deserializeBinaryFromReader);
      msg.setFramesRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      clock_pb.ClockFramesRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional quilibrium.node.clock.pb.ClockFramesRequest frames_request = 1;
 * @return {?proto.quilibrium.node.clock.pb.ClockFramesRequest}
 */
proto.quilibrium.node.node.pb.SyncRequest.prototype.getFramesRequest = function() {
  return /** @type{?proto.quilibrium.node.clock.pb.ClockFramesRequest} */ (
    jspb.Message.getWrapperField(this, clock_pb.ClockFramesRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.clock.pb.ClockFramesRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SyncRequest} returns this
*/
proto.quilibrium.node.node.pb.SyncRequest.prototype.setFramesRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SyncRequest} returns this
 */
proto.quilibrium.node.node.pb.SyncRequest.prototype.clearFramesRequest = function() {
  return this.setFramesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SyncRequest.prototype.hasFramesRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesResponse: (f = msg.getFramesResponse()) && clock_pb.ClockFramesResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SyncResponse}
 */
proto.quilibrium.node.node.pb.SyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SyncResponse;
  return proto.quilibrium.node.node.pb.SyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SyncResponse}
 */
proto.quilibrium.node.node.pb.SyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new clock_pb.ClockFramesResponse;
      reader.readMessage(value,clock_pb.ClockFramesResponse.deserializeBinaryFromReader);
      msg.setFramesResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      clock_pb.ClockFramesResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional quilibrium.node.clock.pb.ClockFramesResponse frames_response = 1;
 * @return {?proto.quilibrium.node.clock.pb.ClockFramesResponse}
 */
proto.quilibrium.node.node.pb.SyncResponse.prototype.getFramesResponse = function() {
  return /** @type{?proto.quilibrium.node.clock.pb.ClockFramesResponse} */ (
    jspb.Message.getWrapperField(this, clock_pb.ClockFramesResponse, 1));
};


/**
 * @param {?proto.quilibrium.node.clock.pb.ClockFramesResponse|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SyncResponse} returns this
*/
proto.quilibrium.node.node.pb.SyncResponse.prototype.setFramesResponse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SyncResponse} returns this
 */
proto.quilibrium.node.node.pb.SyncResponse.prototype.clearFramesResponse = function() {
  return this.setFramesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SyncResponse.prototype.hasFramesResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetPeerManifestsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetPeerManifestsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetPeerManifestsRequest}
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetPeerManifestsRequest;
  return proto.quilibrium.node.node.pb.GetPeerManifestsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetPeerManifestsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetPeerManifestsRequest}
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetPeerManifestsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetPeerManifestsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPeerManifestsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PeerManifest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PeerManifest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PeerManifest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerManifest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: msg.getPeerId_asB64(),
    cores: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memory: msg.getMemory_asB64(),
    storage: msg.getStorage_asB64(),
    capabilitiesList: jspb.Message.toObjectList(msg.getCapabilitiesList(),
    proto.quilibrium.node.node.pb.Capability.toObject, includeInstance),
    masterHeadFrame: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lastSeen: jspb.Message.getFieldWithDefault(msg, 7, 0),
    increment: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PeerManifest}
 */
proto.quilibrium.node.node.pb.PeerManifest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PeerManifest;
  return proto.quilibrium.node.node.pb.PeerManifest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PeerManifest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PeerManifest}
 */
proto.quilibrium.node.node.pb.PeerManifest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCores(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMemory(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStorage(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.Capability;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Capability.deserializeBinaryFromReader);
      msg.addCapabilities(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMasterHeadFrame(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastSeen(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIncrement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PeerManifest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PeerManifest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerManifest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCores();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMemory_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStorage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getCapabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.Capability.serializeBinaryToWriter
    );
  }
  f = message.getMasterHeadFrame();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getLastSeen();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getIncrement();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional bytes peer_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getPeerId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes peer_id = 1;
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getPeerId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerId()));
};


/**
 * optional bytes peer_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getPeerId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 cores = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes memory = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getMemory = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes memory = 3;
 * This is a type-conversion wrapper around `getMemory()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getMemory_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMemory()));
};


/**
 * optional bytes memory = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMemory()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getMemory_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMemory()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setMemory = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes storage = 4;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getStorage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes storage = 4;
 * This is a type-conversion wrapper around `getStorage()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getStorage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStorage()));
};


/**
 * optional bytes storage = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStorage()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getStorage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStorage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setStorage = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * repeated Capability capabilities = 5;
 * @return {!Array<!proto.quilibrium.node.node.pb.Capability>}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getCapabilitiesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.Capability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.Capability, 5));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.Capability>} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
*/
proto.quilibrium.node.node.pb.PeerManifest.prototype.setCapabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.Capability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.Capability}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.addCapabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.quilibrium.node.node.pb.Capability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.clearCapabilitiesList = function() {
  return this.setCapabilitiesList([]);
};


/**
 * optional uint64 master_head_frame = 6;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getMasterHeadFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setMasterHeadFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 last_seen = 7;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getLastSeen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setLastSeen = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 increment = 8;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.getIncrement = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifest} returns this
 */
proto.quilibrium.node.node.pb.PeerManifest.prototype.setIncrement = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AnnounceProverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKeySignaturesEd448List: jspb.Message.toObjectList(msg.getPublicKeySignaturesEd448List(),
    keys_pb.Ed448Signature.toObject, includeInstance),
    initialProof: (f = msg.getInitialProof()) && proto.quilibrium.node.node.pb.MintCoinRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AnnounceProverRequest;
  return proto.quilibrium.node.node.pb.AnnounceProverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.addPublicKeySignaturesEd448(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.MintCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinaryFromReader);
      msg.setInitialProof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AnnounceProverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKeySignaturesEd448List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
  f = message.getInitialProof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.MintCoinRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated quilibrium.node.keys.pb.Ed448Signature public_key_signatures_ed448 = 1;
 * @return {!Array<!proto.quilibrium.node.keys.pb.Ed448Signature>}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.getPublicKeySignaturesEd448List = function() {
  return /** @type{!Array<!proto.quilibrium.node.keys.pb.Ed448Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, keys_pb.Ed448Signature, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.keys.pb.Ed448Signature>} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.setPublicKeySignaturesEd448List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.keys.pb.Ed448Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.addPublicKeySignaturesEd448 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.keys.pb.Ed448Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.clearPublicKeySignaturesEd448List = function() {
  return this.setPublicKeySignaturesEd448List([]);
};


/**
 * optional MintCoinRequest initial_proof = 2;
 * @return {?proto.quilibrium.node.node.pb.MintCoinRequest}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.getInitialProof = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MintCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MintCoinRequest, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MintCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.setInitialProof = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverRequest} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.clearInitialProof = function() {
  return this.setInitialProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AnnounceProverRequest.prototype.hasInitialProof = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AnnounceProverJoin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverJoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    frameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    publicKeySignatureEd448: (f = msg.getPublicKeySignatureEd448()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AnnounceProverJoin;
  return proto.quilibrium.node.node.pb.AnnounceProverJoin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverJoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 3:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setPublicKeySignatureEd448(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AnnounceProverJoin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverJoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPublicKeySignatureEd448();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature public_key_signature_ed448 = 3;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.getPublicKeySignatureEd448 = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.setPublicKeySignatureEd448 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverJoin} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.clearPublicKeySignatureEd448 = function() {
  return this.setPublicKeySignatureEd448(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AnnounceProverJoin.prototype.hasPublicKeySignatureEd448 = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AnnounceProverLeave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverLeave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    frameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    publicKeySignatureEd448: (f = msg.getPublicKeySignatureEd448()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AnnounceProverLeave;
  return proto.quilibrium.node.node.pb.AnnounceProverLeave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverLeave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 3:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setPublicKeySignatureEd448(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AnnounceProverLeave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverLeave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPublicKeySignatureEd448();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature public_key_signature_ed448 = 3;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.getPublicKeySignatureEd448 = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.setPublicKeySignatureEd448 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverLeave} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.clearPublicKeySignatureEd448 = function() {
  return this.setPublicKeySignatureEd448(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AnnounceProverLeave.prototype.hasPublicKeySignatureEd448 = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AnnounceProverPause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverPause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    frameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    publicKeySignatureEd448: (f = msg.getPublicKeySignatureEd448()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AnnounceProverPause;
  return proto.quilibrium.node.node.pb.AnnounceProverPause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverPause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 3:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setPublicKeySignatureEd448(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AnnounceProverPause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverPause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPublicKeySignatureEd448();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature public_key_signature_ed448 = 3;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.getPublicKeySignatureEd448 = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.setPublicKeySignatureEd448 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverPause} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.clearPublicKeySignatureEd448 = function() {
  return this.setPublicKeySignatureEd448(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AnnounceProverPause.prototype.hasPublicKeySignatureEd448 = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AnnounceProverResume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverResume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    frameNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    publicKeySignatureEd448: (f = msg.getPublicKeySignatureEd448()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AnnounceProverResume;
  return proto.quilibrium.node.node.pb.AnnounceProverResume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverResume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 3:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setPublicKeySignatureEd448(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AnnounceProverResume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AnnounceProverResume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPublicKeySignatureEd448();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 frame_number = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature public_key_signature_ed448 = 3;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.getPublicKeySignatureEd448 = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume} returns this
*/
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.setPublicKeySignatureEd448 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AnnounceProverResume} returns this
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.clearPublicKeySignatureEd448 = function() {
  return this.setPublicKeySignatureEd448(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AnnounceProverResume.prototype.hasPublicKeySignatureEd448 = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.OriginatedAccountRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.OriginatedAccountRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.OriginatedAccountRef}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.OriginatedAccountRef;
  return proto.quilibrium.node.node.pb.OriginatedAccountRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.OriginatedAccountRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.OriginatedAccountRef}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.OriginatedAccountRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.OriginatedAccountRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.OriginatedAccountRef} returns this
 */
proto.quilibrium.node.node.pb.OriginatedAccountRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.ImplicitAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.ImplicitAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ImplicitAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    implicitType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: msg.getAddress_asB64(),
    domain: msg.getDomain_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.ImplicitAccount}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.ImplicitAccount;
  return proto.quilibrium.node.node.pb.ImplicitAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.ImplicitAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.ImplicitAccount}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImplicitType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.ImplicitAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.ImplicitAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ImplicitAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImplicitType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDomain_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 implicit_type = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getImplicitType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.ImplicitAccount} returns this
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.setImplicitType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes address = 2;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.ImplicitAccount} returns this
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes domain = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getDomain = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes domain = 3;
 * This is a type-conversion wrapper around `getDomain()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getDomain_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDomain()));
};


/**
 * optional bytes domain = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDomain()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.getDomain_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDomain()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.ImplicitAccount} returns this
 */
proto.quilibrium.node.node.pb.ImplicitAccount.prototype.setDomain = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quilibrium.node.node.pb.AccountRef.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quilibrium.node.node.pb.AccountRef.AccountCase = {
  ACCOUNT_NOT_SET: 0,
  ORIGINATED_ACCOUNT: 1,
  IMPLICIT_ACCOUNT: 2
};

/**
 * @return {proto.quilibrium.node.node.pb.AccountRef.AccountCase}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.getAccountCase = function() {
  return /** @type {proto.quilibrium.node.node.pb.AccountRef.AccountCase} */(jspb.Message.computeOneofCase(this, proto.quilibrium.node.node.pb.AccountRef.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AccountRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AccountRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AccountRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    originatedAccount: (f = msg.getOriginatedAccount()) && proto.quilibrium.node.node.pb.OriginatedAccountRef.toObject(includeInstance, f),
    implicitAccount: (f = msg.getImplicitAccount()) && proto.quilibrium.node.node.pb.ImplicitAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.AccountRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AccountRef;
  return proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AccountRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.OriginatedAccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.OriginatedAccountRef.deserializeBinaryFromReader);
      msg.setOriginatedAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.ImplicitAccount;
      reader.readMessage(value,proto.quilibrium.node.node.pb.ImplicitAccount.deserializeBinaryFromReader);
      msg.setImplicitAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AccountRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginatedAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.OriginatedAccountRef.serializeBinaryToWriter
    );
  }
  f = message.getImplicitAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.ImplicitAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional OriginatedAccountRef originated_account = 1;
 * @return {?proto.quilibrium.node.node.pb.OriginatedAccountRef}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.getOriginatedAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.OriginatedAccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.OriginatedAccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.OriginatedAccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AccountRef} returns this
*/
proto.quilibrium.node.node.pb.AccountRef.prototype.setOriginatedAccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quilibrium.node.node.pb.AccountRef.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AccountRef} returns this
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.clearOriginatedAccount = function() {
  return this.setOriginatedAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.hasOriginatedAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImplicitAccount implicit_account = 2;
 * @return {?proto.quilibrium.node.node.pb.ImplicitAccount}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.getImplicitAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.ImplicitAccount} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.ImplicitAccount, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.ImplicitAccount|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AccountRef} returns this
*/
proto.quilibrium.node.node.pb.AccountRef.prototype.setImplicitAccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quilibrium.node.node.pb.AccountRef.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AccountRef} returns this
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.clearImplicitAccount = function() {
  return this.setImplicitAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AccountRef.prototype.hasImplicitAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AccountAllowanceRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
  return proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AccountAllowanceRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AccountAllowanceRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.AccountAllowanceRef} returns this
 */
proto.quilibrium.node.node.pb.AccountAllowanceRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.CoinAllowanceRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
  return proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.CoinAllowanceRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.CoinAllowanceRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.CoinAllowanceRef} returns this
 */
proto.quilibrium.node.node.pb.CoinAllowanceRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.Coin.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.Coin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.Coin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Coin.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    intersection: msg.getIntersection_asB64(),
    owner: (f = msg.getOwner()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.Coin}
 */
proto.quilibrium.node.node.pb.Coin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.Coin;
  return proto.quilibrium.node.node.pb.Coin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.Coin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.Coin}
 */
proto.quilibrium.node.node.pb.Coin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIntersection(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Coin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.Coin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.Coin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Coin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIntersection_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getAmount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Coin} returns this
 */
proto.quilibrium.node.node.pb.Coin.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes intersection = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getIntersection = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes intersection = 2;
 * This is a type-conversion wrapper around `getIntersection()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getIntersection_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIntersection()));
};


/**
 * optional bytes intersection = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIntersection()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getIntersection_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIntersection()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Coin} returns this
 */
proto.quilibrium.node.node.pb.Coin.prototype.setIntersection = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional AccountRef owner = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.Coin.prototype.getOwner = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.Coin} returns this
*/
proto.quilibrium.node.node.pb.Coin.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.Coin} returns this
 */
proto.quilibrium.node.node.pb.Coin.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.Coin.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.quilibrium.node.node.pb.TokenRequest.RequestCase = {
  REQUEST_NOT_SET: 0,
  TRANSFER: 1,
  SPLIT: 2,
  MERGE: 3,
  MINT: 4,
  ANNOUNCE: 5
};

/**
 * @return {proto.quilibrium.node.node.pb.TokenRequest.RequestCase}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getRequestCase = function() {
  return /** @type {proto.quilibrium.node.node.pb.TokenRequest.RequestCase} */(jspb.Message.computeOneofCase(this, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && proto.quilibrium.node.node.pb.TransferCoinRequest.toObject(includeInstance, f),
    split: (f = msg.getSplit()) && proto.quilibrium.node.node.pb.SplitCoinRequest.toObject(includeInstance, f),
    merge: (f = msg.getMerge()) && proto.quilibrium.node.node.pb.MergeCoinRequest.toObject(includeInstance, f),
    mint: (f = msg.getMint()) && proto.quilibrium.node.node.pb.MintCoinRequest.toObject(includeInstance, f),
    announce: (f = msg.getAnnounce()) && proto.quilibrium.node.node.pb.AnnounceProverRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokenRequest;
  return proto.quilibrium.node.node.pb.TokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.TransferCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.TransferCoinRequest.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.SplitCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.SplitCoinRequest.deserializeBinaryFromReader);
      msg.setSplit(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.MergeCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MergeCoinRequest.deserializeBinaryFromReader);
      msg.setMerge(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.MintCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinaryFromReader);
      msg.setMint(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.AnnounceProverRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AnnounceProverRequest.deserializeBinaryFromReader);
      msg.setAnnounce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.TransferCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getSplit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.SplitCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getMerge();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.MergeCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getMint();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.MintCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getAnnounce();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.AnnounceProverRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferCoinRequest transfer = 1;
 * @return {?proto.quilibrium.node.node.pb.TransferCoinRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getTransfer = function() {
  return /** @type{?proto.quilibrium.node.node.pb.TransferCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.TransferCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.TransferCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
*/
proto.quilibrium.node.node.pb.TokenRequest.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SplitCoinRequest split = 2;
 * @return {?proto.quilibrium.node.node.pb.SplitCoinRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getSplit = function() {
  return /** @type{?proto.quilibrium.node.node.pb.SplitCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.SplitCoinRequest, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.SplitCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
*/
proto.quilibrium.node.node.pb.TokenRequest.prototype.setSplit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.clearSplit = function() {
  return this.setSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.hasSplit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MergeCoinRequest merge = 3;
 * @return {?proto.quilibrium.node.node.pb.MergeCoinRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getMerge = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MergeCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MergeCoinRequest, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MergeCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
*/
proto.quilibrium.node.node.pb.TokenRequest.prototype.setMerge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.clearMerge = function() {
  return this.setMerge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.hasMerge = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MintCoinRequest mint = 4;
 * @return {?proto.quilibrium.node.node.pb.MintCoinRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getMint = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MintCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MintCoinRequest, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MintCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
*/
proto.quilibrium.node.node.pb.TokenRequest.prototype.setMint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.clearMint = function() {
  return this.setMint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.hasMint = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AnnounceProverRequest announce = 5;
 * @return {?proto.quilibrium.node.node.pb.AnnounceProverRequest}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.getAnnounce = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AnnounceProverRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AnnounceProverRequest, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AnnounceProverRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
*/
proto.quilibrium.node.node.pb.TokenRequest.prototype.setAnnounce = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.quilibrium.node.node.pb.TokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenRequest} returns this
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.clearAnnounce = function() {
  return this.setAnnounce(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenRequest.prototype.hasAnnounce = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.TokenRequests.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokenRequests.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokenRequests.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokenRequests} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenRequests.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.quilibrium.node.node.pb.TokenRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokenRequests}
 */
proto.quilibrium.node.node.pb.TokenRequests.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokenRequests;
  return proto.quilibrium.node.node.pb.TokenRequests.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokenRequests} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokenRequests}
 */
proto.quilibrium.node.node.pb.TokenRequests.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.TokenRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.TokenRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenRequests.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokenRequests.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokenRequests} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenRequests.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.TokenRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenRequest requests = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.TokenRequest>}
 */
proto.quilibrium.node.node.pb.TokenRequests.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.TokenRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.TokenRequest, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.TokenRequest>} value
 * @return {!proto.quilibrium.node.node.pb.TokenRequests} returns this
*/
proto.quilibrium.node.node.pb.TokenRequests.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.TokenRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.TokenRequest}
 */
proto.quilibrium.node.node.pb.TokenRequests.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.TokenRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TokenRequests} returns this
 */
proto.quilibrium.node.node.pb.TokenRequests.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PreCoinProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PreCoinProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PreCoinProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    indexproof: msg.getIndexproof_asB64(),
    commitment: msg.getCommitment_asB64(),
    proof: msg.getProof_asB64(),
    parallelism: jspb.Message.getFieldWithDefault(msg, 6, 0),
    difficulty: jspb.Message.getFieldWithDefault(msg, 7, 0),
    owner: (f = msg.getOwner()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof}
 */
proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PreCoinProof;
  return proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PreCoinProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof}
 */
proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIndexproof(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCommitment(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProof(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParallelism(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDifficulty(value);
      break;
    case 8:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PreCoinProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PreCoinProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PreCoinProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIndexproof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getParallelism();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getDifficulty();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getAmount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes indexProof = 3;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getIndexproof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes indexProof = 3;
 * This is a type-conversion wrapper around `getIndexproof()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getIndexproof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIndexproof()));
};


/**
 * optional bytes indexProof = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIndexproof()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getIndexproof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIndexproof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setIndexproof = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes commitment = 4;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getCommitment = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes commitment = 4;
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getCommitment_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCommitment()));
};


/**
 * optional bytes commitment = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getCommitment_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCommitment()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setCommitment = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes proof = 5;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes proof = 5;
 * This is a type-conversion wrapper around `getProof()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProof()));
};


/**
 * optional bytes proof = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProof()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setProof = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint32 parallelism = 6;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getParallelism = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setParallelism = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 difficulty = 7;
 * @return {number}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getDifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setDifficulty = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional AccountRef owner = 8;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.getOwner = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 8));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
*/
proto.quilibrium.node.node.pb.PreCoinProof.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PreCoinProof.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.quilibrium.node.node.pb.TokenOutput.OutputCase = {
  OUTPUT_NOT_SET: 0,
  COIN: 1,
  PROOF: 2,
  DELETED_COIN: 3,
  DELETED_PROOF: 4
};

/**
 * @return {proto.quilibrium.node.node.pb.TokenOutput.OutputCase}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.getOutputCase = function() {
  return /** @type {proto.quilibrium.node.node.pb.TokenOutput.OutputCase} */(jspb.Message.computeOneofCase(this, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokenOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokenOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.Coin.toObject(includeInstance, f),
    proof: (f = msg.getProof()) && proto.quilibrium.node.node.pb.PreCoinProof.toObject(includeInstance, f),
    deletedCoin: (f = msg.getDeletedCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    deletedProof: (f = msg.getDeletedProof()) && proto.quilibrium.node.node.pb.PreCoinProof.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput}
 */
proto.quilibrium.node.node.pb.TokenOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokenOutput;
  return proto.quilibrium.node.node.pb.TokenOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokenOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput}
 */
proto.quilibrium.node.node.pb.TokenOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.Coin;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Coin.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.PreCoinProof;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinaryFromReader);
      msg.setProof(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setDeletedCoin(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.PreCoinProof;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinaryFromReader);
      msg.setDeletedProof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokenOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokenOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getProof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.PreCoinProof.serializeBinaryToWriter
    );
  }
  f = message.getDeletedCoin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getDeletedProof();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.PreCoinProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional Coin coin = 1;
 * @return {?proto.quilibrium.node.node.pb.Coin}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Coin} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Coin, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Coin|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
*/
proto.quilibrium.node.node.pb.TokenOutput.prototype.setCoin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PreCoinProof proof = 2;
 * @return {?proto.quilibrium.node.node.pb.PreCoinProof}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.getProof = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PreCoinProof} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PreCoinProof, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PreCoinProof|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
*/
proto.quilibrium.node.node.pb.TokenOutput.prototype.setProof = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.clearProof = function() {
  return this.setProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.hasProof = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CoinRef deleted_coin = 3;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.getDeletedCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
*/
proto.quilibrium.node.node.pb.TokenOutput.prototype.setDeletedCoin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.clearDeletedCoin = function() {
  return this.setDeletedCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.hasDeletedCoin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PreCoinProof deleted_proof = 4;
 * @return {?proto.quilibrium.node.node.pb.PreCoinProof}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.getDeletedProof = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PreCoinProof} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PreCoinProof, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PreCoinProof|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
*/
proto.quilibrium.node.node.pb.TokenOutput.prototype.setDeletedProof = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.quilibrium.node.node.pb.TokenOutput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TokenOutput} returns this
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.clearDeletedProof = function() {
  return this.setDeletedProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TokenOutput.prototype.hasDeletedProof = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.TokenOutputs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokenOutputs.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokenOutputs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokenOutputs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenOutputs.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.quilibrium.node.node.pb.TokenOutput.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokenOutputs}
 */
proto.quilibrium.node.node.pb.TokenOutputs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokenOutputs;
  return proto.quilibrium.node.node.pb.TokenOutputs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokenOutputs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokenOutputs}
 */
proto.quilibrium.node.node.pb.TokenOutputs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.TokenOutput;
      reader.readMessage(value,proto.quilibrium.node.node.pb.TokenOutput.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokenOutputs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokenOutputs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokenOutputs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokenOutputs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.TokenOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenOutput outputs = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.TokenOutput>}
 */
proto.quilibrium.node.node.pb.TokenOutputs.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.TokenOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.TokenOutput, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.TokenOutput>} value
 * @return {!proto.quilibrium.node.node.pb.TokenOutputs} returns this
*/
proto.quilibrium.node.node.pb.TokenOutputs.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.TokenOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.TokenOutput}
 */
proto.quilibrium.node.node.pb.TokenOutputs.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.TokenOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TokenOutputs} returns this
 */
proto.quilibrium.node.node.pb.TokenOutputs.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.CoinRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.CoinRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.CoinRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.CoinRef;
  return proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.CoinRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.CoinRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.CoinRef} returns this
 */
proto.quilibrium.node.node.pb.CoinRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PendingTransactionRef;
  return proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionRef} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.KeyRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.KeyRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.KeyRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.KeyRef}
 */
proto.quilibrium.node.node.pb.KeyRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.KeyRef;
  return proto.quilibrium.node.node.pb.KeyRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.KeyRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.KeyRef}
 */
proto.quilibrium.node.node.pb.KeyRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.KeyRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.KeyRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.KeyRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.KeyRef} returns this
 */
proto.quilibrium.node.node.pb.KeyRef.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatureType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signature: msg.getSignature_asB64(),
    key: (f = msg.getKey()) && proto.quilibrium.node.node.pb.KeyRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.Signature;
  return proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSignatureType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.KeyRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRef.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.KeyRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 signature_type = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.Signature.prototype.getSignatureType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.Signature} returns this
 */
proto.quilibrium.node.node.pb.Signature.prototype.setSignatureType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Signature} returns this
 */
proto.quilibrium.node.node.pb.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional KeyRef key = 3;
 * @return {?proto.quilibrium.node.node.pb.KeyRef}
 */
proto.quilibrium.node.node.pb.Signature.prototype.getKey = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.Signature} returns this
*/
proto.quilibrium.node.node.pb.Signature.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.Signature} returns this
 */
proto.quilibrium.node.node.pb.Signature.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.Signature.prototype.hasKey = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PeerManifestsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PeerManifestsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerManifestsList: jspb.Message.toObjectList(msg.getPeerManifestsList(),
    proto.quilibrium.node.node.pb.PeerManifest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PeerManifestsResponse}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PeerManifestsResponse;
  return proto.quilibrium.node.node.pb.PeerManifestsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PeerManifestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PeerManifestsResponse}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PeerManifest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PeerManifest.deserializeBinaryFromReader);
      msg.addPeerManifests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PeerManifestsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PeerManifestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerManifestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PeerManifest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PeerManifest peer_manifests = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.PeerManifest>}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.getPeerManifestsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PeerManifest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PeerManifest, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PeerManifest>} value
 * @return {!proto.quilibrium.node.node.pb.PeerManifestsResponse} returns this
*/
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.setPeerManifestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PeerManifest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PeerManifest}
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.addPeerManifests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.PeerManifest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PeerManifestsResponse} returns this
 */
proto.quilibrium.node.node.pb.PeerManifestsResponse.prototype.clearPeerManifestsList = function() {
  return this.setPeerManifestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransaction: (f = msg.getPendingTransaction()) && proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest;
  return proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader);
      msg.setPendingTransaction(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionRef pending_transaction = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.getPendingTransaction = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.setPendingTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.clearPendingTransaction = function() {
  return this.setPendingTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.hasPendingTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Signature signature = 2;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AcceptPendingTransactionRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AllowAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AllowAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofAccount: (f = msg.getOfAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    permittedAccount: (f = msg.getPermittedAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    permittedOperationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AllowAccountRequest;
  return proto.quilibrium.node.node.pb.AllowAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AllowAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setOfAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setPermittedAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermittedOperations(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AllowAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AllowAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getPermittedAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getPermittedOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef of_account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.getOfAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.setOfAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.clearOfAccount = function() {
  return this.setOfAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.hasOfAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountRef permitted_account = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.getPermittedAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.setPermittedAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.clearPermittedAccount = function() {
  return this.setPermittedAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.hasPermittedAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string permitted_operations = 3;
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.getPermittedOperationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.setPermittedOperationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.addPermittedOperations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.clearPermittedOperationsList = function() {
  return this.setPermittedOperationsList([]);
};


/**
 * optional AccountAllowanceRef allowance = 4;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Signature signature = 5;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowAccountRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AllowCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AllowCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    permittedAccount: (f = msg.getPermittedAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    permittedOperationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AllowCoinRequest;
  return proto.quilibrium.node.node.pb.AllowCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AllowCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setPermittedAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermittedOperations(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 6:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AllowCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AllowCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getPermittedAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getPermittedOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinRef of_coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountRef permitted_account = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getPermittedAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setPermittedAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearPermittedAccount = function() {
  return this.setPermittedAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.hasPermittedAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string permitted_operations = 3;
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getPermittedOperationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setPermittedOperationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.addPermittedOperations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearPermittedOperationsList = function() {
  return this.setPermittedOperationsList([]);
};


/**
 * optional AccountAllowanceRef account_allowance = 4;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 5;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Signature signature = 6;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 6));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.BalanceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.BalanceAccountRequest;
  return proto.quilibrium.node.node.pb.BalanceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.BalanceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.getAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.BalanceAccountRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.CoinsAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.CoinsAccountRequest;
  return proto.quilibrium.node.node.pb.CoinsAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.CoinsAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.getAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.CoinsAccountRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest;
  return proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.getAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.IntersectCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: msg.getAddressesList_asB64(),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.IntersectCoinRequest;
  return proto.quilibrium.node.node.pb.IntersectCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAddresses(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.IntersectCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
};


/**
 * repeated bytes addresses = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getAddressesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes addresses = 1;
 * This is a type-conversion wrapper around `getAddressesList()`
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getAddressesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAddressesList()));
};


/**
 * repeated bytes addresses = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddressesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getAddressesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAddressesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


/**
 * optional AccountAllowanceRef account_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 3;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CoinRef of_coin = 4;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.IntersectCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MergeCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MergeCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    proto.quilibrium.node.node.pb.CoinRef.toObject, includeInstance),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowancesList: jspb.Message.toObjectList(msg.getCoinAllowancesList(),
    proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject, includeInstance),
    signature: (f = msg.getSignature()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MergeCoinRequest;
  return proto.quilibrium.node.node.pb.MergeCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MergeCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.addCoins(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.addCoinAllowances(value);
      break;
    case 4:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MergeCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MergeCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CoinRef coins = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.CoinRef>}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.CoinRef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.CoinRef>} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.CoinRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.CoinRef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};


/**
 * optional AccountAllowanceRef account_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated CoinAllowanceRef coin_allowances = 3;
 * @return {!Array<!proto.quilibrium.node.node.pb.CoinAllowanceRef>}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.getCoinAllowancesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.CoinAllowanceRef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 3));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.CoinAllowanceRef>} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.setCoinAllowancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.CoinAllowanceRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.addCoinAllowances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.quilibrium.node.node.pb.CoinAllowanceRef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.clearCoinAllowancesList = function() {
  return this.setCoinAllowancesList([]);
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature signature = 4;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 4));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MergeCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MintCoinRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MintCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MintCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MintCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proofsList: msg.getProofsList_asB64(),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MintCoinRequest;
  return proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MintCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProofs(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 3:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MintCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MintCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MintCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated bytes proofs = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes proofs = 1;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


/**
 * optional AccountAllowanceRef allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature signature = 3;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MintCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    toAccount: (f = msg.getToAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MutualReceiveCoinRequest;
  return proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setToAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef to_account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.getToAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.setToAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.clearToAccount = function() {
  return this.setToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.hasToAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MutualTransferCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rendezvous: msg.getRendezvous_asB64(),
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MutualTransferCoinRequest;
  return proto.quilibrium.node.node.pb.MutualTransferCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRendezvous(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MutualTransferCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRendezvous_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes rendezvous = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getRendezvous = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes rendezvous = 1;
 * This is a type-conversion wrapper around `getRendezvous()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getRendezvous_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRendezvous()));
};


/**
 * optional bytes rendezvous = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRendezvous()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getRendezvous_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRendezvous()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.setRendezvous = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional CoinRef of_coin = 2;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountAllowanceRef account_allowance = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 4;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Signature signature = 5;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RevokeAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofAccount: (f = msg.getOfAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    revokedAllowance: (f = msg.getRevokedAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RevokeAccountRequest;
  return proto.quilibrium.node.node.pb.RevokeAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setOfAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setRevokedAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RevokeAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getRevokedAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef of_account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.getOfAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.setOfAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.clearOfAccount = function() {
  return this.setOfAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.hasOfAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef revoked_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.getRevokedAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.setRevokedAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.clearRevokedAllowance = function() {
  return this.setRevokedAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.hasRevokedAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountAllowanceRef allowance = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Signature signature = 4;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeAccountRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RevokeCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    revokedAllowance: (f = msg.getRevokedAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RevokeCoinRequest;
  return proto.quilibrium.node.node.pb.RevokeCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setRevokedAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RevokeCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getRevokedAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinRef of_coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CoinAllowanceRef revoked_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.getRevokedAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.setRevokedAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.clearRevokedAllowance = function() {
  return this.setRevokedAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.hasRevokedAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountAllowanceRef account_allowance = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 4;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Signature signature = 5;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RevokeCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SplitCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SplitCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    amountsList: msg.getAmountsList_asB64(),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SplitCoinRequest;
  return proto.quilibrium.node.node.pb.SplitCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SplitCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAmounts(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 5:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SplitCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SplitCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getAmountsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinRef of_coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bytes amounts = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getAmountsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes amounts = 2;
 * This is a type-conversion wrapper around `getAmountsList()`
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getAmountsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAmountsList()));
};


/**
 * repeated bytes amounts = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmountsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getAmountsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAmountsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.setAmountsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.addAmounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.clearAmountsList = function() {
  return this.setAmountsList([]);
};


/**
 * optional AccountAllowanceRef account_allowance = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 4;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 4));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature signature = 5;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 5));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.SplitCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TransferCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TransferCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    toAccount: (f = msg.getToAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    refundAccount: (f = msg.getRefundAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f),
    ofCoin: (f = msg.getOfCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    expiry: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    coinAllowance: (f = msg.getCoinAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && keys_pb.Ed448Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TransferCoinRequest;
  return proto.quilibrium.node.node.pb.TransferCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TransferCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setToAccount(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setRefundAccount(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setOfCoin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiry(value);
      break;
    case 5:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 6:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setCoinAllowance(value);
      break;
    case 7:
      var value = new keys_pb.Ed448Signature;
      reader.readMessage(value,keys_pb.Ed448Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TransferCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TransferCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getRefundAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getOfCoin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getCoinAllowance();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      keys_pb.Ed448Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountRef to_account = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getToAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setToAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearToAccount = function() {
  return this.setToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasToAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountRef refund_account = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getRefundAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setRefundAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearRefundAccount = function() {
  return this.setRefundAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasRefundAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CoinRef of_coin = 3;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getOfCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setOfCoin = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearOfCoin = function() {
  return this.setOfCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasOfCoin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 expiry = 4;
 * @return {number}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional AccountAllowanceRef account_allowance = 5;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 5));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CoinAllowanceRef coin_allowance = 6;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getCoinAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 6));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setCoinAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearCoinAllowance = function() {
  return this.setCoinAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasCoinAllowance = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional quilibrium.node.keys.pb.Ed448Signature signature = 7;
 * @return {?proto.quilibrium.node.keys.pb.Ed448Signature}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.keys.pb.Ed448Signature} */ (
    jspb.Message.getWrapperField(this, keys_pb.Ed448Signature, 7));
};


/**
 * @param {?proto.quilibrium.node.keys.pb.Ed448Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransaction: (f = msg.getPendingTransaction()) && proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(includeInstance, f),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest;
  return proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader);
      msg.setPendingTransaction(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionRef pending_transaction = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.getPendingTransaction = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.setPendingTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.clearPendingTransaction = function() {
  return this.setPendingTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.hasPendingTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef account_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransaction: (f = msg.getPendingTransaction()) && proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(includeInstance, f),
    accountAllowance: (f = msg.getAccountAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.quilibrium.node.node.pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RejectPendingTransactionRequest;
  return proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader);
      msg.setPendingTransaction(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAccountAllowance(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.Signature;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter
    );
  }
  f = message.getAccountAllowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionRef pending_transaction = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.getPendingTransaction = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.setPendingTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.clearPendingTransaction = function() {
  return this.setPendingTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.hasPendingTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountAllowanceRef account_allowance = 2;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.getAccountAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.setAccountAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.clearAccountAllowance = function() {
  return this.setAccountAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.hasAccountAllowance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.quilibrium.node.node.pb.Signature}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.getSignature = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Signature} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Signature, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Signature|undefined} value
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.InlineKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.InlineKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.InlineKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: msg.getRef_asB64(),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.InlineKey}
 */
proto.quilibrium.node.node.pb.InlineKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.InlineKey;
  return proto.quilibrium.node.node.pb.InlineKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.InlineKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.InlineKey}
 */
proto.quilibrium.node.node.pb.InlineKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRef(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.InlineKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.InlineKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.InlineKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRef_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes ref = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getRef = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ref = 1;
 * This is a type-conversion wrapper around `getRef()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getRef_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRef()));
};


/**
 * optional bytes ref = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRef()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getRef_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRef()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.InlineKey} returns this
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.setRef = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.InlineKey} returns this
 */
proto.quilibrium.node.node.pb.InlineKey.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.KeyRing.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.KeyRing.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.KeyRing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.KeyRing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.KeyRing.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.quilibrium.node.node.pb.InlineKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.KeyRing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.KeyRing;
  return proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.KeyRing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.InlineKey;
      reader.readMessage(value,proto.quilibrium.node.node.pb.InlineKey.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.KeyRing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.KeyRing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.InlineKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InlineKey keys = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.InlineKey>}
 */
proto.quilibrium.node.node.pb.KeyRing.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.InlineKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.InlineKey, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.InlineKey>} value
 * @return {!proto.quilibrium.node.node.pb.KeyRing} returns this
*/
proto.quilibrium.node.node.pb.KeyRing.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.InlineKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.InlineKey}
 */
proto.quilibrium.node.node.pb.KeyRing.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.InlineKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.KeyRing} returns this
 */
proto.quilibrium.node.node.pb.KeyRing.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.Confirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.Confirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Confirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: msg.getMessageId_asB64(),
    proof: msg.getProof_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.Confirmation}
 */
proto.quilibrium.node.node.pb.Confirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.Confirmation;
  return proto.quilibrium.node.node.pb.Confirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.Confirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.Confirmation}
 */
proto.quilibrium.node.node.pb.Confirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.Confirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.Confirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.Confirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes message_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getMessageId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes message_id = 1;
 * This is a type-conversion wrapper around `getMessageId()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getMessageId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessageId()));
};


/**
 * optional bytes message_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessageId()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getMessageId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessageId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Confirmation} returns this
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes proof = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes proof = 2;
 * This is a type-conversion wrapper around `getProof()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProof()));
};


/**
 * optional bytes proof = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProof()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.getProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.Confirmation} returns this
 */
proto.quilibrium.node.node.pb.Confirmation.prototype.setProof = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DeliveryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DeliveryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DeliveryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    sharedKey: (f = msg.getSharedKey()) && proto.quilibrium.node.node.pb.InlineKey.toObject(includeInstance, f),
    confirmation: (f = msg.getConfirmation()) && proto.quilibrium.node.node.pb.Confirmation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.DeliveryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DeliveryData;
  return proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DeliveryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.InlineKey;
      reader.readMessage(value,proto.quilibrium.node.node.pb.InlineKey.deserializeBinaryFromReader);
      msg.setSharedKey(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.Confirmation;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Confirmation.deserializeBinaryFromReader);
      msg.setConfirmation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DeliveryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSharedKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.InlineKey.serializeBinaryToWriter
    );
  }
  f = message.getConfirmation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.Confirmation.serializeBinaryToWriter
    );
  }
};


/**
 * optional InlineKey shared_key = 1;
 * @return {?proto.quilibrium.node.node.pb.InlineKey}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.getSharedKey = function() {
  return /** @type{?proto.quilibrium.node.node.pb.InlineKey} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.InlineKey, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.InlineKey|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DeliveryData} returns this
*/
proto.quilibrium.node.node.pb.DeliveryData.prototype.setSharedKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DeliveryData} returns this
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.clearSharedKey = function() {
  return this.setSharedKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.hasSharedKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Confirmation confirmation = 2;
 * @return {?proto.quilibrium.node.node.pb.Confirmation}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.getConfirmation = function() {
  return /** @type{?proto.quilibrium.node.node.pb.Confirmation} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.Confirmation, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.Confirmation|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DeliveryData} returns this
*/
proto.quilibrium.node.node.pb.DeliveryData.prototype.setConfirmation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DeliveryData} returns this
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.clearConfirmation = function() {
  return this.setConfirmation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DeliveryData.prototype.hasConfirmation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DeliveryMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DeliveryMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DeliveryMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliveryType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DeliveryMethod;
  return proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DeliveryMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeliveryType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DeliveryMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveryType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 delivery_type = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.getDeliveryType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.DeliveryMethod} returns this
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.setDeliveryType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes address = 2;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.DeliveryMethod} returns this
 */
proto.quilibrium.node.node.pb.DeliveryMethod.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.AllowAccountRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest;
  return proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AllowAccountRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AllowAccountRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AllowAccountRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional AllowAccountRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.AllowAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AllowAccountRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AllowAccountRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AllowAccountRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowAccountRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.BalanceAccountRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest;
  return proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.BalanceAccountRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.BalanceAccountRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.BalanceAccountRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
};


/**
 * optional BalanceAccountRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.BalanceAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.BalanceAccountRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.BalanceAccountRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.BalanceAccountRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableBalanceAccountRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.CoinsAccountRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest;
  return proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinsAccountRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinsAccountRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinsAccountRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinsAccountRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinsAccountRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinsAccountRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinsAccountRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableCoinsAccountRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.RevokeAccountRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest;
  return proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.RevokeAccountRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.RevokeAccountRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.RevokeAccountRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional RevokeAccountRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.RevokeAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.RevokeAccountRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.RevokeAccountRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.RevokeAccountRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeAccountRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest;
  return proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionsAccountRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionsAccountRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptablePendingTransactionsAccountRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.AllowCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AllowCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AllowCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AllowCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional AllowCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.AllowCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AllowCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AllowCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AllowCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableAllowCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.IntersectCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.IntersectCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.IntersectCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.IntersectCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional IntersectCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.IntersectCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.IntersectCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.IntersectCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.IntersectCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableIntersectCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.MergeCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.MergeCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MergeCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.MergeCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional MergeCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.MergeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MergeCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MergeCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MergeCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMergeCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.MintCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableMintCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.MintCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MintCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.MintCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional MintCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.MintCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MintCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MintCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MintCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMintCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMintCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.MutualReceiveCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.MutualReceiveCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutualReceiveCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.MutualReceiveCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MutualReceiveCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MutualReceiveCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MutualReceiveCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualReceiveCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.MutualTransferCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.MutualTransferCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.MutualTransferCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.MutualTransferCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutualTransferCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.MutualTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.MutualTransferCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.MutualTransferCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.MutualTransferCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableMutualTransferCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.RevokeCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.RevokeCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.RevokeCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.RevokeCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional RevokeCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.RevokeCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.RevokeCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.RevokeCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.RevokeCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRevokeCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.SplitCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.SplitCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.SplitCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.SplitCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional SplitCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.SplitCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.SplitCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.SplitCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.SplitCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableSplitCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.TransferCoinRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest;
  return proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.TransferCoinRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.TransferCoinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.TransferCoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferCoinRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.TransferCoinRequest}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.TransferCoinRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.TransferCoinRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.TransferCoinRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableTransferCoinRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest;
  return proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional ApprovePendingTransactionRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.ApprovePendingTransactionRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableApprovePendingTransactionRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.toObject(includeInstance, f),
    keyRing: (f = msg.getKeyRing()) && proto.quilibrium.node.node.pb.KeyRing.toObject(includeInstance, f),
    deliveryMethod: (f = msg.getDeliveryMethod()) && proto.quilibrium.node.node.pb.DeliveryMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest;
  return proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.RejectPendingTransactionRequest;
      reader.readMessage(value,proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.KeyRing;
      reader.readMessage(value,proto.quilibrium.node.node.pb.KeyRing.deserializeBinaryFromReader);
      msg.setKeyRing(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.DeliveryMethod;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryMethod.deserializeBinaryFromReader);
      msg.setDeliveryMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.RejectPendingTransactionRequest.serializeBinaryToWriter
    );
  }
  f = message.getKeyRing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.KeyRing.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.DeliveryMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional RejectPendingTransactionRequest request = 1;
 * @return {?proto.quilibrium.node.node.pb.RejectPendingTransactionRequest}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.getRequest = function() {
  return /** @type{?proto.quilibrium.node.node.pb.RejectPendingTransactionRequest} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.RejectPendingTransactionRequest, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.RejectPendingTransactionRequest|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyRing key_ring = 2;
 * @return {?proto.quilibrium.node.node.pb.KeyRing}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.getKeyRing = function() {
  return /** @type{?proto.quilibrium.node.node.pb.KeyRing} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.KeyRing, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.KeyRing|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.setKeyRing = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.clearKeyRing = function() {
  return this.setKeyRing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.hasKeyRing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryMethod delivery_method = 3;
 * @return {?proto.quilibrium.node.node.pb.DeliveryMethod}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.getDeliveryMethod = function() {
  return /** @type{?proto.quilibrium.node.node.pb.DeliveryMethod} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.DeliveryMethod, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.DeliveryMethod|undefined} value
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
*/
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest} returns this
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.clearDeliveryMethod = function() {
  return this.setDeliveryMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.DecryptableRejectPendingTransactionRequest.prototype.hasDeliveryMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.CoinInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.CoinInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    balance: msg.getBalance_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.CoinInfo}
 */
proto.quilibrium.node.node.pb.CoinInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.CoinInfo;
  return proto.quilibrium.node.node.pb.CoinInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.CoinInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.CoinInfo}
 */
proto.quilibrium.node.node.pb.CoinInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.CoinInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.CoinInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getBalance_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional CoinRef coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.CoinInfo} returns this
*/
proto.quilibrium.node.node.pb.CoinInfo.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.CoinInfo} returns this
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes balance = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.getBalance = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes balance = 2;
 * This is a type-conversion wrapper around `getBalance()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.getBalance_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBalance()));
};


/**
 * optional bytes balance = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBalance()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.getBalance_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBalance()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.CoinInfo} returns this
 */
proto.quilibrium.node.node.pb.CoinInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PendingTransactionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransaction: (f = msg.getPendingTransaction()) && proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(includeInstance, f),
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.CoinInfo.toObject(includeInstance, f),
    refundAccount: (f = msg.getRefundAccount()) && proto.quilibrium.node.node.pb.AccountRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PendingTransactionInfo;
  return proto.quilibrium.node.node.pb.PendingTransactionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader);
      msg.setPendingTransaction(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.CoinInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinInfo.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.AccountRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountRef.deserializeBinaryFromReader);
      msg.setRefundAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PendingTransactionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter
    );
  }
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.CoinInfo.serializeBinaryToWriter
    );
  }
  f = message.getRefundAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.AccountRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionRef pending_transaction = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.getPendingTransaction = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.setPendingTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.clearPendingTransaction = function() {
  return this.setPendingTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.hasPendingTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CoinInfo coin = 2;
 * @return {?proto.quilibrium.node.node.pb.CoinInfo}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinInfo} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinInfo, 2));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinInfo|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountRef refund_account = 3;
 * @return {?proto.quilibrium.node.node.pb.AccountRef}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.getRefundAccount = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.setRefundAccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.clearRefundAccount = function() {
  return this.setRefundAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.PendingTransactionInfo.prototype.hasRefundAccount = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AllowAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AllowAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.AccountAllowanceRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AllowAccountResponse;
  return proto.quilibrium.node.node.pb.AllowAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AllowAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.AccountAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.AccountAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AllowAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AllowAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.AccountAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountAllowanceRef allowance = 1;
 * @return {?proto.quilibrium.node.node.pb.AccountAllowanceRef}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.AccountAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.AccountAllowanceRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.AccountAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.AllowAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.AllowAccountResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.BalanceAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: msg.getBalance_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountResponse}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.BalanceAccountResponse;
  return proto.quilibrium.node.node.pb.BalanceAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountResponse}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.BalanceAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.BalanceAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes balance = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.getBalance = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes balance = 1;
 * This is a type-conversion wrapper around `getBalance()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.getBalance_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBalance()));
};


/**
 * optional bytes balance = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBalance()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.getBalance_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBalance()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.BalanceAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.BalanceAccountResponse.prototype.setBalance = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.CoinsAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    proto.quilibrium.node.node.pb.CoinInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountResponse}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.CoinsAccountResponse;
  return proto.quilibrium.node.node.pb.CoinsAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountResponse}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinInfo.deserializeBinaryFromReader);
      msg.addCoins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.CoinsAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.CoinsAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CoinInfo coins = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.CoinInfo>}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.CoinInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.CoinInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.CoinInfo>} value
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.CoinInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.CoinInfo}
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.CoinInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.CoinsAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.CoinsAccountResponse.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransactionsList: jspb.Message.toObjectList(msg.getPendingTransactionsList(),
    proto.quilibrium.node.node.pb.PendingTransactionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse;
  return proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionInfo.deserializeBinaryFromReader);
      msg.addPendingTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PendingTransactionInfo pending_transactions = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.PendingTransactionInfo>}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.getPendingTransactionsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PendingTransactionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PendingTransactionInfo>} value
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.setPendingTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PendingTransactionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionInfo}
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.addPendingTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.PendingTransactionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.PendingTransactionsAccountResponse.prototype.clearPendingTransactionsList = function() {
  return this.setPendingTransactionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RevokeAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountResponse}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RevokeAccountResponse;
  return proto.quilibrium.node.node.pb.RevokeAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountResponse}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RevokeAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RevokeAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeliveryData deliveries = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.RevokeAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.RevokeAccountResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.AllowCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.AllowCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && proto.quilibrium.node.node.pb.CoinAllowanceRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.AllowCoinResponse;
  return proto.quilibrium.node.node.pb.AllowCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.AllowCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinAllowanceRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinAllowanceRef.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.AllowCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.AllowCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinAllowanceRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinAllowanceRef allowance = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinAllowanceRef}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.getAllowance = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinAllowanceRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinAllowanceRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinAllowanceRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.AllowCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.AllowCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.IntersectCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intersects: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinResponse}
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.IntersectCoinResponse;
  return proto.quilibrium.node.node.pb.IntersectCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinResponse}
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntersects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.IntersectCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.IntersectCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntersects();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool intersects = 1;
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.prototype.getIntersects = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quilibrium.node.node.pb.IntersectCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.IntersectCoinResponse.prototype.setIntersects = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MergeCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MergeCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MergeCoinResponse;
  return proto.quilibrium.node.node.pb.MergeCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MergeCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MergeCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MergeCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinRef coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MergeCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MergeCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MintCoinResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MintCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MintCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MintCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    proto.quilibrium.node.node.pb.CoinInfo.toObject, includeInstance),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MintCoinResponse;
  return proto.quilibrium.node.node.pb.MintCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MintCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinInfo;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinInfo.deserializeBinaryFromReader);
      msg.addCoins(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MintCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MintCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MintCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinInfo.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CoinInfo coins = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.CoinInfo>}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.CoinInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.CoinInfo, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.CoinInfo>} value
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.CoinInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.CoinInfo}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.CoinInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MintCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MintCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rendezvous: msg.getRendezvous_asB64(),
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MutualReceiveCoinResponse;
  return proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRendezvous(value);
      break;
    case 3:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 4:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRendezvous_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 status = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes rendezvous = 2;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getRendezvous = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes rendezvous = 2;
 * This is a type-conversion wrapper around `getRendezvous()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getRendezvous_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRendezvous()));
};


/**
 * optional bytes rendezvous = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRendezvous()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getRendezvous_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRendezvous()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.setRendezvous = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional CoinRef coin = 3;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 3));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated DeliveryData deliveries = 4;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 4));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MutualReceiveCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualReceiveCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.MutualTransferCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.MutualTransferCoinResponse;
  return proto.quilibrium.node.node.pb.MutualTransferCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.MutualTransferCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 status = 1;
 * @return {number}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.MutualTransferCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.MutualTransferCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RevokeCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinResponse}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RevokeCoinResponse;
  return proto.quilibrium.node.node.pb.RevokeCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinResponse}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RevokeCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RevokeCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeliveryData deliveries = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.RevokeCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.RevokeCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SplitCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SplitCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    proto.quilibrium.node.node.pb.CoinRef.toObject, includeInstance),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SplitCoinResponse;
  return proto.quilibrium.node.node.pb.SplitCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SplitCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.addCoins(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SplitCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SplitCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CoinRef coins = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.CoinRef>}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.CoinRef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.CoinRef>} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.CoinRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.CoinRef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.SplitCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.SplitCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TransferCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TransferCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingTransaction: (f = msg.getPendingTransaction()) && proto.quilibrium.node.node.pb.PendingTransactionRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TransferCoinResponse;
  return proto.quilibrium.node.node.pb.TransferCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TransferCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PendingTransactionRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PendingTransactionRef.deserializeBinaryFromReader);
      msg.setPendingTransaction(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TransferCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TransferCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PendingTransactionRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional PendingTransactionRef pending_transaction = 1;
 * @return {?proto.quilibrium.node.node.pb.PendingTransactionRef}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.getPendingTransaction = function() {
  return /** @type{?proto.quilibrium.node.node.pb.PendingTransactionRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.PendingTransactionRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.PendingTransactionRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.setPendingTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.clearPendingTransaction = function() {
  return this.setPendingTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.hasPendingTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse} returns this
*/
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TransferCoinResponse} returns this
 */
proto.quilibrium.node.node.pb.TransferCoinResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: (f = msg.getCoin()) && proto.quilibrium.node.node.pb.CoinRef.toObject(includeInstance, f),
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse;
  return proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.CoinRef;
      reader.readMessage(value,proto.quilibrium.node.node.pb.CoinRef.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.CoinRef.serializeBinaryToWriter
    );
  }
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoinRef coin = 1;
 * @return {?proto.quilibrium.node.node.pb.CoinRef}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.getCoin = function() {
  return /** @type{?proto.quilibrium.node.node.pb.CoinRef} */ (
    jspb.Message.getWrapperField(this, proto.quilibrium.node.node.pb.CoinRef, 1));
};


/**
 * @param {?proto.quilibrium.node.node.pb.CoinRef|undefined} value
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} returns this
*/
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} returns this
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} returns this
*/
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse} returns this
 */
proto.quilibrium.node.node.pb.ApprovePendingTransactionResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.quilibrium.node.node.pb.DeliveryData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.RejectPendingTransactionResponse;
  return proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.quilibrium.node.node.pb.DeliveryData;
      reader.readMessage(value,proto.quilibrium.node.node.pb.DeliveryData.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quilibrium.node.node.pb.DeliveryData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeliveryData deliveries = 2;
 * @return {!Array<!proto.quilibrium.node.node.pb.DeliveryData>}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.DeliveryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.DeliveryData, 2));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.DeliveryData>} value
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse} returns this
*/
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.setDeliveriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.DeliveryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.DeliveryData}
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quilibrium.node.node.pb.DeliveryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.RejectPendingTransactionResponse} returns this
 */
proto.quilibrium.node.node.pb.RejectPendingTransactionResponse.prototype.clearDeliveriesList = function() {
  return this.setDeliveriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.SendMessageResponse}
 */
proto.quilibrium.node.node.pb.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.SendMessageResponse;
  return proto.quilibrium.node.node.pb.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.SendMessageResponse}
 */
proto.quilibrium.node.node.pb.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetTokensByAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetTokensByAccountRequest;
  return proto.quilibrium.node.node.pb.GetTokensByAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetTokensByAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetTokensByAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.GetTokensByAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.TokensByAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.TokensByAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coinsList: jspb.Message.toObjectList(msg.getCoinsList(),
    proto.quilibrium.node.node.pb.Coin.toObject, includeInstance),
    frameNumbersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    addressesList: msg.getAddressesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.TokensByAccountResponse;
  return proto.quilibrium.node.node.pb.TokensByAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.TokensByAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.Coin;
      reader.readMessage(value,proto.quilibrium.node.node.pb.Coin.deserializeBinaryFromReader);
      msg.addCoins(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFrameNumbers(values[i]);
      }
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.TokensByAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.TokensByAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getFrameNumbersList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
  f = message.getAddressesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * repeated Coin coins = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.Coin>}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.getCoinsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.Coin, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.Coin>} value
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.setCoinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.Coin}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.addCoins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.clearCoinsList = function() {
  return this.setCoinsList([]);
};


/**
 * repeated uint64 frame_numbers = 2;
 * @return {!Array<number>}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.getFrameNumbersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.setFrameNumbersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.addFrameNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.clearFrameNumbersList = function() {
  return this.setFrameNumbersList([]);
};


/**
 * repeated bytes addresses = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.getAddressesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes addresses = 3;
 * This is a type-conversion wrapper around `getAddressesList()`
 * @return {!Array<string>}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.getAddressesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAddressesList()));
};


/**
 * repeated bytes addresses = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddressesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.getAddressesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAddressesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.TokensByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.TokensByAccountResponse.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest;
  return proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest} returns this
 */
proto.quilibrium.node.node.pb.GetPreCoinProofsByAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    proofsList: jspb.Message.toObjectList(msg.getProofsList(),
    proto.quilibrium.node.node.pb.PreCoinProof.toObject, includeInstance),
    frameNumbersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse;
  return proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quilibrium.node.node.pb.PreCoinProof;
      reader.readMessage(value,proto.quilibrium.node.node.pb.PreCoinProof.deserializeBinaryFromReader);
      msg.addProofs(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFrameNumbers(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProofsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quilibrium.node.node.pb.PreCoinProof.serializeBinaryToWriter
    );
  }
  f = message.getFrameNumbersList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
};


/**
 * repeated PreCoinProof proofs = 1;
 * @return {!Array<!proto.quilibrium.node.node.pb.PreCoinProof>}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.getProofsList = function() {
  return /** @type{!Array<!proto.quilibrium.node.node.pb.PreCoinProof>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quilibrium.node.node.pb.PreCoinProof, 1));
};


/**
 * @param {!Array<!proto.quilibrium.node.node.pb.PreCoinProof>} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} returns this
*/
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.setProofsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quilibrium.node.node.pb.PreCoinProof=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PreCoinProof}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.addProofs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quilibrium.node.node.pb.PreCoinProof, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


/**
 * repeated uint64 frame_numbers = 2;
 * @return {!Array<number>}
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.getFrameNumbersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.setFrameNumbersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.addFrameNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse} returns this
 */
proto.quilibrium.node.node.pb.PreCoinProofsByAccountResponse.prototype.clearFrameNumbersList = function() {
  return this.setFrameNumbersList([]);
};


goog.object.extend(exports, proto.quilibrium.node.node.pb);
