import * as jspb from 'google-protobuf'

import * as clock_pb from './clock_pb'; // proto import: "clock.proto"
import * as keys_pb from './keys_pb'; // proto import: "keys.proto"


export class GetFramesRequest extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): GetFramesRequest;

  getFromFrameNumber(): number;
  setFromFrameNumber(value: number): GetFramesRequest;

  getToFrameNumber(): number;
  setToFrameNumber(value: number): GetFramesRequest;

  getIncludeCandidates(): boolean;
  setIncludeCandidates(value: boolean): GetFramesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFramesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFramesRequest): GetFramesRequest.AsObject;
  static serializeBinaryToWriter(message: GetFramesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFramesRequest;
  static deserializeBinaryFromReader(message: GetFramesRequest, reader: jspb.BinaryReader): GetFramesRequest;
}

export namespace GetFramesRequest {
  export type AsObject = {
    filter: Uint8Array | string,
    fromFrameNumber: number,
    toFrameNumber: number,
    includeCandidates: boolean,
  }
}

export class GetFrameInfoRequest extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): GetFrameInfoRequest;

  getFrameNumber(): number;
  setFrameNumber(value: number): GetFrameInfoRequest;

  getSelector(): Uint8Array | string;
  getSelector_asU8(): Uint8Array;
  getSelector_asB64(): string;
  setSelector(value: Uint8Array | string): GetFrameInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFrameInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFrameInfoRequest): GetFrameInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetFrameInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFrameInfoRequest;
  static deserializeBinaryFromReader(message: GetFrameInfoRequest, reader: jspb.BinaryReader): GetFrameInfoRequest;
}

export namespace GetFrameInfoRequest {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    selector: Uint8Array | string,
  }
}

export class GetPeerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerInfoRequest): GetPeerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetPeerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerInfoRequest;
  static deserializeBinaryFromReader(message: GetPeerInfoRequest, reader: jspb.BinaryReader): GetPeerInfoRequest;
}

export namespace GetPeerInfoRequest {
  export type AsObject = {
  }
}

export class GetNodeInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoRequest): GetNodeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoRequest;
  static deserializeBinaryFromReader(message: GetNodeInfoRequest, reader: jspb.BinaryReader): GetNodeInfoRequest;
}

export namespace GetNodeInfoRequest {
  export type AsObject = {
  }
}

export class GetNetworkInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkInfoRequest): GetNetworkInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetNetworkInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkInfoRequest;
  static deserializeBinaryFromReader(message: GetNetworkInfoRequest, reader: jspb.BinaryReader): GetNetworkInfoRequest;
}

export namespace GetNetworkInfoRequest {
  export type AsObject = {
  }
}

export class FramesResponse extends jspb.Message {
  getTruncatedClockFramesList(): Array<clock_pb.ClockFrame>;
  setTruncatedClockFramesList(value: Array<clock_pb.ClockFrame>): FramesResponse;
  clearTruncatedClockFramesList(): FramesResponse;
  addTruncatedClockFrames(value?: clock_pb.ClockFrame, index?: number): clock_pb.ClockFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FramesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FramesResponse): FramesResponse.AsObject;
  static serializeBinaryToWriter(message: FramesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FramesResponse;
  static deserializeBinaryFromReader(message: FramesResponse, reader: jspb.BinaryReader): FramesResponse;
}

export namespace FramesResponse {
  export type AsObject = {
    truncatedClockFramesList: Array<clock_pb.ClockFrame.AsObject>,
  }
}

export class FrameInfoResponse extends jspb.Message {
  getClockFrame(): clock_pb.ClockFrame | undefined;
  setClockFrame(value?: clock_pb.ClockFrame): FrameInfoResponse;
  hasClockFrame(): boolean;
  clearClockFrame(): FrameInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FrameInfoResponse): FrameInfoResponse.AsObject;
  static serializeBinaryToWriter(message: FrameInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameInfoResponse;
  static deserializeBinaryFromReader(message: FrameInfoResponse, reader: jspb.BinaryReader): FrameInfoResponse;
}

export namespace FrameInfoResponse {
  export type AsObject = {
    clockFrame?: clock_pb.ClockFrame.AsObject,
  }
}

export class PeerInfo extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): PeerInfo;

  getMultiaddrsList(): Array<string>;
  setMultiaddrsList(value: Array<string>): PeerInfo;
  clearMultiaddrsList(): PeerInfo;
  addMultiaddrs(value: string, index?: number): PeerInfo;

  getMaxFrame(): number;
  setMaxFrame(value: number): PeerInfo;

  getTimestamp(): number;
  setTimestamp(value: number): PeerInfo;

  getVersion(): Uint8Array | string;
  getVersion_asU8(): Uint8Array;
  getVersion_asB64(): string;
  setVersion(value: Uint8Array | string): PeerInfo;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): PeerInfo;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): PeerInfo;

  getTotalDistance(): Uint8Array | string;
  getTotalDistance_asU8(): Uint8Array;
  getTotalDistance_asB64(): string;
  setTotalDistance(value: Uint8Array | string): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
  static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfo;
  static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
  export type AsObject = {
    peerId: Uint8Array | string,
    multiaddrsList: Array<string>,
    maxFrame: number,
    timestamp: number,
    version: Uint8Array | string,
    signature: Uint8Array | string,
    publicKey: Uint8Array | string,
    totalDistance: Uint8Array | string,
  }
}

export class PeerInfoResponse extends jspb.Message {
  getPeerInfoList(): Array<PeerInfo>;
  setPeerInfoList(value: Array<PeerInfo>): PeerInfoResponse;
  clearPeerInfoList(): PeerInfoResponse;
  addPeerInfo(value?: PeerInfo, index?: number): PeerInfo;

  getUncooperativePeerInfoList(): Array<PeerInfo>;
  setUncooperativePeerInfoList(value: Array<PeerInfo>): PeerInfoResponse;
  clearUncooperativePeerInfoList(): PeerInfoResponse;
  addUncooperativePeerInfo(value?: PeerInfo, index?: number): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfoResponse): PeerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: PeerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfoResponse;
  static deserializeBinaryFromReader(message: PeerInfoResponse, reader: jspb.BinaryReader): PeerInfoResponse;
}

export namespace PeerInfoResponse {
  export type AsObject = {
    peerInfoList: Array<PeerInfo.AsObject>,
    uncooperativePeerInfoList: Array<PeerInfo.AsObject>,
  }
}

export class NetworkInfo extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): NetworkInfo;

  getMultiaddrsList(): Array<string>;
  setMultiaddrsList(value: Array<string>): NetworkInfo;
  clearMultiaddrsList(): NetworkInfo;
  addMultiaddrs(value: string, index?: number): NetworkInfo;

  getPeerScore(): number;
  setPeerScore(value: number): NetworkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
  static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfo;
  static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
  export type AsObject = {
    peerId: Uint8Array | string,
    multiaddrsList: Array<string>,
    peerScore: number,
  }
}

export class NodeInfoResponse extends jspb.Message {
  getPeerId(): string;
  setPeerId(value: string): NodeInfoResponse;

  getMaxFrame(): number;
  setMaxFrame(value: number): NodeInfoResponse;

  getPeerScore(): number;
  setPeerScore(value: number): NodeInfoResponse;

  getVersion(): Uint8Array | string;
  getVersion_asU8(): Uint8Array;
  getVersion_asB64(): string;
  setVersion(value: Uint8Array | string): NodeInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoResponse): NodeInfoResponse.AsObject;
  static serializeBinaryToWriter(message: NodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoResponse;
  static deserializeBinaryFromReader(message: NodeInfoResponse, reader: jspb.BinaryReader): NodeInfoResponse;
}

export namespace NodeInfoResponse {
  export type AsObject = {
    peerId: string,
    maxFrame: number,
    peerScore: number,
    version: Uint8Array | string,
  }
}

export class PutPeerInfoRequest extends jspb.Message {
  getPeerInfoList(): Array<PeerInfo>;
  setPeerInfoList(value: Array<PeerInfo>): PutPeerInfoRequest;
  clearPeerInfoList(): PutPeerInfoRequest;
  addPeerInfo(value?: PeerInfo, index?: number): PeerInfo;

  getUncooperativePeerInfoList(): Array<PeerInfo>;
  setUncooperativePeerInfoList(value: Array<PeerInfo>): PutPeerInfoRequest;
  clearUncooperativePeerInfoList(): PutPeerInfoRequest;
  addUncooperativePeerInfo(value?: PeerInfo, index?: number): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPeerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutPeerInfoRequest): PutPeerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: PutPeerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPeerInfoRequest;
  static deserializeBinaryFromReader(message: PutPeerInfoRequest, reader: jspb.BinaryReader): PutPeerInfoRequest;
}

export namespace PutPeerInfoRequest {
  export type AsObject = {
    peerInfoList: Array<PeerInfo.AsObject>,
    uncooperativePeerInfoList: Array<PeerInfo.AsObject>,
  }
}

export class PutNodeInfoRequest extends jspb.Message {
  getPeerId(): string;
  setPeerId(value: string): PutNodeInfoRequest;

  getMaxFrame(): number;
  setMaxFrame(value: number): PutNodeInfoRequest;

  getPeerScore(): number;
  setPeerScore(value: number): PutNodeInfoRequest;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): PutNodeInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutNodeInfoRequest): PutNodeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: PutNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutNodeInfoRequest;
  static deserializeBinaryFromReader(message: PutNodeInfoRequest, reader: jspb.BinaryReader): PutNodeInfoRequest;
}

export namespace PutNodeInfoRequest {
  export type AsObject = {
    peerId: string,
    maxFrame: number,
    peerScore: number,
    signature: Uint8Array | string,
  }
}

export class PutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
  static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResponse;
  static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
  export type AsObject = {
  }
}

export class NetworkInfoResponse extends jspb.Message {
  getNetworkInfoList(): Array<NetworkInfo>;
  setNetworkInfoList(value: Array<NetworkInfo>): NetworkInfoResponse;
  clearNetworkInfoList(): NetworkInfoResponse;
  addNetworkInfo(value?: NetworkInfo, index?: number): NetworkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoResponse): NetworkInfoResponse.AsObject;
  static serializeBinaryToWriter(message: NetworkInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoResponse;
  static deserializeBinaryFromReader(message: NetworkInfoResponse, reader: jspb.BinaryReader): NetworkInfoResponse;
}

export namespace NetworkInfoResponse {
  export type AsObject = {
    networkInfoList: Array<NetworkInfo.AsObject>,
  }
}

export class GetTokenInfoRequest extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): GetTokenInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenInfoRequest): GetTokenInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenInfoRequest;
  static deserializeBinaryFromReader(message: GetTokenInfoRequest, reader: jspb.BinaryReader): GetTokenInfoRequest;
}

export namespace GetTokenInfoRequest {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class TokenInfoResponse extends jspb.Message {
  getConfirmedTokenSupply(): Uint8Array | string;
  getConfirmedTokenSupply_asU8(): Uint8Array;
  getConfirmedTokenSupply_asB64(): string;
  setConfirmedTokenSupply(value: Uint8Array | string): TokenInfoResponse;

  getUnconfirmedTokenSupply(): Uint8Array | string;
  getUnconfirmedTokenSupply_asU8(): Uint8Array;
  getUnconfirmedTokenSupply_asB64(): string;
  setUnconfirmedTokenSupply(value: Uint8Array | string): TokenInfoResponse;

  getOwnedTokens(): Uint8Array | string;
  getOwnedTokens_asU8(): Uint8Array;
  getOwnedTokens_asB64(): string;
  setOwnedTokens(value: Uint8Array | string): TokenInfoResponse;

  getUnconfirmedOwnedTokens(): Uint8Array | string;
  getUnconfirmedOwnedTokens_asU8(): Uint8Array;
  getUnconfirmedOwnedTokens_asB64(): string;
  setUnconfirmedOwnedTokens(value: Uint8Array | string): TokenInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfoResponse): TokenInfoResponse.AsObject;
  static serializeBinaryToWriter(message: TokenInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfoResponse;
  static deserializeBinaryFromReader(message: TokenInfoResponse, reader: jspb.BinaryReader): TokenInfoResponse;
}

export namespace TokenInfoResponse {
  export type AsObject = {
    confirmedTokenSupply: Uint8Array | string,
    unconfirmedTokenSupply: Uint8Array | string,
    ownedTokens: Uint8Array | string,
    unconfirmedOwnedTokens: Uint8Array | string,
  }
}

export class Capability extends jspb.Message {
  getProtocolIdentifier(): number;
  setProtocolIdentifier(value: number): Capability;

  getAdditionalMetadata(): Uint8Array | string;
  getAdditionalMetadata_asU8(): Uint8Array;
  getAdditionalMetadata_asB64(): string;
  setAdditionalMetadata(value: Uint8Array | string): Capability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Capability.AsObject;
  static toObject(includeInstance: boolean, msg: Capability): Capability.AsObject;
  static serializeBinaryToWriter(message: Capability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Capability;
  static deserializeBinaryFromReader(message: Capability, reader: jspb.BinaryReader): Capability;
}

export namespace Capability {
  export type AsObject = {
    protocolIdentifier: number,
    additionalMetadata: Uint8Array | string,
  }
}

export class SelfTestReport extends jspb.Message {
  getCores(): number;
  setCores(value: number): SelfTestReport;

  getMemory(): Uint8Array | string;
  getMemory_asU8(): Uint8Array;
  getMemory_asB64(): string;
  setMemory(value: Uint8Array | string): SelfTestReport;

  getStorage(): Uint8Array | string;
  getStorage_asU8(): Uint8Array;
  getStorage_asB64(): string;
  setStorage(value: Uint8Array | string): SelfTestReport;

  getCapabilitiesList(): Array<Capability>;
  setCapabilitiesList(value: Array<Capability>): SelfTestReport;
  clearCapabilitiesList(): SelfTestReport;
  addCapabilities(value?: Capability, index?: number): Capability;

  getMasterHeadFrame(): number;
  setMasterHeadFrame(value: number): SelfTestReport;

  getProverRange(): Uint8Array | string;
  getProverRange_asU8(): Uint8Array;
  getProverRange_asB64(): string;
  setProverRange(value: Uint8Array | string): SelfTestReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelfTestReport.AsObject;
  static toObject(includeInstance: boolean, msg: SelfTestReport): SelfTestReport.AsObject;
  static serializeBinaryToWriter(message: SelfTestReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelfTestReport;
  static deserializeBinaryFromReader(message: SelfTestReport, reader: jspb.BinaryReader): SelfTestReport;
}

export namespace SelfTestReport {
  export type AsObject = {
    cores: number,
    memory: Uint8Array | string,
    storage: Uint8Array | string,
    capabilitiesList: Array<Capability.AsObject>,
    masterHeadFrame: number,
    proverRange: Uint8Array | string,
  }
}

export class ValidationMessage extends jspb.Message {
  getValidation(): Uint8Array | string;
  getValidation_asU8(): Uint8Array;
  getValidation_asB64(): string;
  setValidation(value: Uint8Array | string): ValidationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationMessage): ValidationMessage.AsObject;
  static serializeBinaryToWriter(message: ValidationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationMessage;
  static deserializeBinaryFromReader(message: ValidationMessage, reader: jspb.BinaryReader): ValidationMessage;
}

export namespace ValidationMessage {
  export type AsObject = {
    validation: Uint8Array | string,
  }
}

export class SyncRequest extends jspb.Message {
  getFramesRequest(): clock_pb.ClockFramesRequest | undefined;
  setFramesRequest(value?: clock_pb.ClockFramesRequest): SyncRequest;
  hasFramesRequest(): boolean;
  clearFramesRequest(): SyncRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequest): SyncRequest.AsObject;
  static serializeBinaryToWriter(message: SyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(message: SyncRequest, reader: jspb.BinaryReader): SyncRequest;
}

export namespace SyncRequest {
  export type AsObject = {
    framesRequest?: clock_pb.ClockFramesRequest.AsObject,
  }
}

export class SyncResponse extends jspb.Message {
  getFramesResponse(): clock_pb.ClockFramesResponse | undefined;
  setFramesResponse(value?: clock_pb.ClockFramesResponse): SyncResponse;
  hasFramesResponse(): boolean;
  clearFramesResponse(): SyncResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponse): SyncResponse.AsObject;
  static serializeBinaryToWriter(message: SyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(message: SyncResponse, reader: jspb.BinaryReader): SyncResponse;
}

export namespace SyncResponse {
  export type AsObject = {
    framesResponse?: clock_pb.ClockFramesResponse.AsObject,
  }
}

export class GetPeerManifestsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerManifestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerManifestsRequest): GetPeerManifestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPeerManifestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerManifestsRequest;
  static deserializeBinaryFromReader(message: GetPeerManifestsRequest, reader: jspb.BinaryReader): GetPeerManifestsRequest;
}

export namespace GetPeerManifestsRequest {
  export type AsObject = {
  }
}

export class PeerManifest extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): PeerManifest;

  getCores(): number;
  setCores(value: number): PeerManifest;

  getMemory(): Uint8Array | string;
  getMemory_asU8(): Uint8Array;
  getMemory_asB64(): string;
  setMemory(value: Uint8Array | string): PeerManifest;

  getStorage(): Uint8Array | string;
  getStorage_asU8(): Uint8Array;
  getStorage_asB64(): string;
  setStorage(value: Uint8Array | string): PeerManifest;

  getCapabilitiesList(): Array<Capability>;
  setCapabilitiesList(value: Array<Capability>): PeerManifest;
  clearCapabilitiesList(): PeerManifest;
  addCapabilities(value?: Capability, index?: number): Capability;

  getMasterHeadFrame(): number;
  setMasterHeadFrame(value: number): PeerManifest;

  getLastSeen(): number;
  setLastSeen(value: number): PeerManifest;

  getIncrement(): number;
  setIncrement(value: number): PeerManifest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerManifest.AsObject;
  static toObject(includeInstance: boolean, msg: PeerManifest): PeerManifest.AsObject;
  static serializeBinaryToWriter(message: PeerManifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerManifest;
  static deserializeBinaryFromReader(message: PeerManifest, reader: jspb.BinaryReader): PeerManifest;
}

export namespace PeerManifest {
  export type AsObject = {
    peerId: Uint8Array | string,
    cores: number,
    memory: Uint8Array | string,
    storage: Uint8Array | string,
    capabilitiesList: Array<Capability.AsObject>,
    masterHeadFrame: number,
    lastSeen: number,
    increment: number,
  }
}

export class AnnounceProverRequest extends jspb.Message {
  getPublicKeySignaturesEd448List(): Array<keys_pb.Ed448Signature>;
  setPublicKeySignaturesEd448List(value: Array<keys_pb.Ed448Signature>): AnnounceProverRequest;
  clearPublicKeySignaturesEd448List(): AnnounceProverRequest;
  addPublicKeySignaturesEd448(value?: keys_pb.Ed448Signature, index?: number): keys_pb.Ed448Signature;

  getInitialProof(): MintCoinRequest | undefined;
  setInitialProof(value?: MintCoinRequest): AnnounceProverRequest;
  hasInitialProof(): boolean;
  clearInitialProof(): AnnounceProverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnounceProverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnounceProverRequest): AnnounceProverRequest.AsObject;
  static serializeBinaryToWriter(message: AnnounceProverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnounceProverRequest;
  static deserializeBinaryFromReader(message: AnnounceProverRequest, reader: jspb.BinaryReader): AnnounceProverRequest;
}

export namespace AnnounceProverRequest {
  export type AsObject = {
    publicKeySignaturesEd448List: Array<keys_pb.Ed448Signature.AsObject>,
    initialProof?: MintCoinRequest.AsObject,
  }
}

export class AnnounceProverJoin extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): AnnounceProverJoin;

  getFrameNumber(): number;
  setFrameNumber(value: number): AnnounceProverJoin;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): AnnounceProverJoin;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): AnnounceProverJoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnounceProverJoin.AsObject;
  static toObject(includeInstance: boolean, msg: AnnounceProverJoin): AnnounceProverJoin.AsObject;
  static serializeBinaryToWriter(message: AnnounceProverJoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnounceProverJoin;
  static deserializeBinaryFromReader(message: AnnounceProverJoin, reader: jspb.BinaryReader): AnnounceProverJoin;
}

export namespace AnnounceProverJoin {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }
}

export class AnnounceProverLeave extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): AnnounceProverLeave;

  getFrameNumber(): number;
  setFrameNumber(value: number): AnnounceProverLeave;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): AnnounceProverLeave;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): AnnounceProverLeave;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnounceProverLeave.AsObject;
  static toObject(includeInstance: boolean, msg: AnnounceProverLeave): AnnounceProverLeave.AsObject;
  static serializeBinaryToWriter(message: AnnounceProverLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnounceProverLeave;
  static deserializeBinaryFromReader(message: AnnounceProverLeave, reader: jspb.BinaryReader): AnnounceProverLeave;
}

export namespace AnnounceProverLeave {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }
}

export class AnnounceProverPause extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): AnnounceProverPause;

  getFrameNumber(): number;
  setFrameNumber(value: number): AnnounceProverPause;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): AnnounceProverPause;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): AnnounceProverPause;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnounceProverPause.AsObject;
  static toObject(includeInstance: boolean, msg: AnnounceProverPause): AnnounceProverPause.AsObject;
  static serializeBinaryToWriter(message: AnnounceProverPause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnounceProverPause;
  static deserializeBinaryFromReader(message: AnnounceProverPause, reader: jspb.BinaryReader): AnnounceProverPause;
}

export namespace AnnounceProverPause {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }
}

export class AnnounceProverResume extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): AnnounceProverResume;

  getFrameNumber(): number;
  setFrameNumber(value: number): AnnounceProverResume;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): AnnounceProverResume;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): AnnounceProverResume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnounceProverResume.AsObject;
  static toObject(includeInstance: boolean, msg: AnnounceProverResume): AnnounceProverResume.AsObject;
  static serializeBinaryToWriter(message: AnnounceProverResume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnounceProverResume;
  static deserializeBinaryFromReader(message: AnnounceProverResume, reader: jspb.BinaryReader): AnnounceProverResume;
}

export namespace AnnounceProverResume {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }
}

export class OriginatedAccountRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): OriginatedAccountRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginatedAccountRef.AsObject;
  static toObject(includeInstance: boolean, msg: OriginatedAccountRef): OriginatedAccountRef.AsObject;
  static serializeBinaryToWriter(message: OriginatedAccountRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginatedAccountRef;
  static deserializeBinaryFromReader(message: OriginatedAccountRef, reader: jspb.BinaryReader): OriginatedAccountRef;
}

export namespace OriginatedAccountRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class ImplicitAccount extends jspb.Message {
  getImplicitType(): number;
  setImplicitType(value: number): ImplicitAccount;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): ImplicitAccount;

  getDomain(): Uint8Array | string;
  getDomain_asU8(): Uint8Array;
  getDomain_asB64(): string;
  setDomain(value: Uint8Array | string): ImplicitAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplicitAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ImplicitAccount): ImplicitAccount.AsObject;
  static serializeBinaryToWriter(message: ImplicitAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplicitAccount;
  static deserializeBinaryFromReader(message: ImplicitAccount, reader: jspb.BinaryReader): ImplicitAccount;
}

export namespace ImplicitAccount {
  export type AsObject = {
    implicitType: number,
    address: Uint8Array | string,
    domain: Uint8Array | string,
  }
}

export class AccountRef extends jspb.Message {
  getOriginatedAccount(): OriginatedAccountRef | undefined;
  setOriginatedAccount(value?: OriginatedAccountRef): AccountRef;
  hasOriginatedAccount(): boolean;
  clearOriginatedAccount(): AccountRef;

  getImplicitAccount(): ImplicitAccount | undefined;
  setImplicitAccount(value?: ImplicitAccount): AccountRef;
  hasImplicitAccount(): boolean;
  clearImplicitAccount(): AccountRef;

  getAccountCase(): AccountRef.AccountCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRef.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRef): AccountRef.AsObject;
  static serializeBinaryToWriter(message: AccountRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRef;
  static deserializeBinaryFromReader(message: AccountRef, reader: jspb.BinaryReader): AccountRef;
}

export namespace AccountRef {
  export type AsObject = {
    originatedAccount?: OriginatedAccountRef.AsObject,
    implicitAccount?: ImplicitAccount.AsObject,
  }

  export enum AccountCase { 
    ACCOUNT_NOT_SET = 0,
    ORIGINATED_ACCOUNT = 1,
    IMPLICIT_ACCOUNT = 2,
  }
}

export class AccountAllowanceRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): AccountAllowanceRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAllowanceRef.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAllowanceRef): AccountAllowanceRef.AsObject;
  static serializeBinaryToWriter(message: AccountAllowanceRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAllowanceRef;
  static deserializeBinaryFromReader(message: AccountAllowanceRef, reader: jspb.BinaryReader): AccountAllowanceRef;
}

export namespace AccountAllowanceRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class CoinAllowanceRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): CoinAllowanceRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinAllowanceRef.AsObject;
  static toObject(includeInstance: boolean, msg: CoinAllowanceRef): CoinAllowanceRef.AsObject;
  static serializeBinaryToWriter(message: CoinAllowanceRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinAllowanceRef;
  static deserializeBinaryFromReader(message: CoinAllowanceRef, reader: jspb.BinaryReader): CoinAllowanceRef;
}

export namespace CoinAllowanceRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class Coin extends jspb.Message {
  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): Coin;

  getIntersection(): Uint8Array | string;
  getIntersection_asU8(): Uint8Array;
  getIntersection_asB64(): string;
  setIntersection(value: Uint8Array | string): Coin;

  getOwner(): AccountRef | undefined;
  setOwner(value?: AccountRef): Coin;
  hasOwner(): boolean;
  clearOwner(): Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coin.AsObject;
  static toObject(includeInstance: boolean, msg: Coin): Coin.AsObject;
  static serializeBinaryToWriter(message: Coin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coin;
  static deserializeBinaryFromReader(message: Coin, reader: jspb.BinaryReader): Coin;
}

export namespace Coin {
  export type AsObject = {
    amount: Uint8Array | string,
    intersection: Uint8Array | string,
    owner?: AccountRef.AsObject,
  }
}

export class TokenRequest extends jspb.Message {
  getTransfer(): TransferCoinRequest | undefined;
  setTransfer(value?: TransferCoinRequest): TokenRequest;
  hasTransfer(): boolean;
  clearTransfer(): TokenRequest;

  getSplit(): SplitCoinRequest | undefined;
  setSplit(value?: SplitCoinRequest): TokenRequest;
  hasSplit(): boolean;
  clearSplit(): TokenRequest;

  getMerge(): MergeCoinRequest | undefined;
  setMerge(value?: MergeCoinRequest): TokenRequest;
  hasMerge(): boolean;
  clearMerge(): TokenRequest;

  getMint(): MintCoinRequest | undefined;
  setMint(value?: MintCoinRequest): TokenRequest;
  hasMint(): boolean;
  clearMint(): TokenRequest;

  getAnnounce(): AnnounceProverRequest | undefined;
  setAnnounce(value?: AnnounceProverRequest): TokenRequest;
  hasAnnounce(): boolean;
  clearAnnounce(): TokenRequest;

  getRequestCase(): TokenRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
  static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    transfer?: TransferCoinRequest.AsObject,
    split?: SplitCoinRequest.AsObject,
    merge?: MergeCoinRequest.AsObject,
    mint?: MintCoinRequest.AsObject,
    announce?: AnnounceProverRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    TRANSFER = 1,
    SPLIT = 2,
    MERGE = 3,
    MINT = 4,
    ANNOUNCE = 5,
  }
}

export class TokenRequests extends jspb.Message {
  getRequestsList(): Array<TokenRequest>;
  setRequestsList(value: Array<TokenRequest>): TokenRequests;
  clearRequestsList(): TokenRequests;
  addRequests(value?: TokenRequest, index?: number): TokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequests.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequests): TokenRequests.AsObject;
  static serializeBinaryToWriter(message: TokenRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequests;
  static deserializeBinaryFromReader(message: TokenRequests, reader: jspb.BinaryReader): TokenRequests;
}

export namespace TokenRequests {
  export type AsObject = {
    requestsList: Array<TokenRequest.AsObject>,
  }
}

export class PreCoinProof extends jspb.Message {
  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): PreCoinProof;

  getIndex(): number;
  setIndex(value: number): PreCoinProof;

  getIndexproof(): Uint8Array | string;
  getIndexproof_asU8(): Uint8Array;
  getIndexproof_asB64(): string;
  setIndexproof(value: Uint8Array | string): PreCoinProof;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): PreCoinProof;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): PreCoinProof;

  getParallelism(): number;
  setParallelism(value: number): PreCoinProof;

  getDifficulty(): number;
  setDifficulty(value: number): PreCoinProof;

  getOwner(): AccountRef | undefined;
  setOwner(value?: AccountRef): PreCoinProof;
  hasOwner(): boolean;
  clearOwner(): PreCoinProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreCoinProof.AsObject;
  static toObject(includeInstance: boolean, msg: PreCoinProof): PreCoinProof.AsObject;
  static serializeBinaryToWriter(message: PreCoinProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreCoinProof;
  static deserializeBinaryFromReader(message: PreCoinProof, reader: jspb.BinaryReader): PreCoinProof;
}

export namespace PreCoinProof {
  export type AsObject = {
    amount: Uint8Array | string,
    index: number,
    indexproof: Uint8Array | string,
    commitment: Uint8Array | string,
    proof: Uint8Array | string,
    parallelism: number,
    difficulty: number,
    owner?: AccountRef.AsObject,
  }
}

export class TokenOutput extends jspb.Message {
  getCoin(): Coin | undefined;
  setCoin(value?: Coin): TokenOutput;
  hasCoin(): boolean;
  clearCoin(): TokenOutput;

  getProof(): PreCoinProof | undefined;
  setProof(value?: PreCoinProof): TokenOutput;
  hasProof(): boolean;
  clearProof(): TokenOutput;

  getDeletedCoin(): CoinRef | undefined;
  setDeletedCoin(value?: CoinRef): TokenOutput;
  hasDeletedCoin(): boolean;
  clearDeletedCoin(): TokenOutput;

  getDeletedProof(): PreCoinProof | undefined;
  setDeletedProof(value?: PreCoinProof): TokenOutput;
  hasDeletedProof(): boolean;
  clearDeletedProof(): TokenOutput;

  getOutputCase(): TokenOutput.OutputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TokenOutput): TokenOutput.AsObject;
  static serializeBinaryToWriter(message: TokenOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenOutput;
  static deserializeBinaryFromReader(message: TokenOutput, reader: jspb.BinaryReader): TokenOutput;
}

export namespace TokenOutput {
  export type AsObject = {
    coin?: Coin.AsObject,
    proof?: PreCoinProof.AsObject,
    deletedCoin?: CoinRef.AsObject,
    deletedProof?: PreCoinProof.AsObject,
  }

  export enum OutputCase { 
    OUTPUT_NOT_SET = 0,
    COIN = 1,
    PROOF = 2,
    DELETED_COIN = 3,
    DELETED_PROOF = 4,
  }
}

export class TokenOutputs extends jspb.Message {
  getOutputsList(): Array<TokenOutput>;
  setOutputsList(value: Array<TokenOutput>): TokenOutputs;
  clearOutputsList(): TokenOutputs;
  addOutputs(value?: TokenOutput, index?: number): TokenOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenOutputs.AsObject;
  static toObject(includeInstance: boolean, msg: TokenOutputs): TokenOutputs.AsObject;
  static serializeBinaryToWriter(message: TokenOutputs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenOutputs;
  static deserializeBinaryFromReader(message: TokenOutputs, reader: jspb.BinaryReader): TokenOutputs;
}

export namespace TokenOutputs {
  export type AsObject = {
    outputsList: Array<TokenOutput.AsObject>,
  }
}

export class CoinRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): CoinRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinRef.AsObject;
  static toObject(includeInstance: boolean, msg: CoinRef): CoinRef.AsObject;
  static serializeBinaryToWriter(message: CoinRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinRef;
  static deserializeBinaryFromReader(message: CoinRef, reader: jspb.BinaryReader): CoinRef;
}

export namespace CoinRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class PendingTransactionRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): PendingTransactionRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransactionRef.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransactionRef): PendingTransactionRef.AsObject;
  static serializeBinaryToWriter(message: PendingTransactionRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransactionRef;
  static deserializeBinaryFromReader(message: PendingTransactionRef, reader: jspb.BinaryReader): PendingTransactionRef;
}

export namespace PendingTransactionRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class KeyRef extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): KeyRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRef.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRef): KeyRef.AsObject;
  static serializeBinaryToWriter(message: KeyRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRef;
  static deserializeBinaryFromReader(message: KeyRef, reader: jspb.BinaryReader): KeyRef;
}

export namespace KeyRef {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class Signature extends jspb.Message {
  getSignatureType(): number;
  setSignatureType(value: number): Signature;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Signature;

  getKey(): KeyRef | undefined;
  setKey(value?: KeyRef): Signature;
  hasKey(): boolean;
  clearKey(): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    signatureType: number,
    signature: Uint8Array | string,
    key?: KeyRef.AsObject,
  }
}

export class PeerManifestsResponse extends jspb.Message {
  getPeerManifestsList(): Array<PeerManifest>;
  setPeerManifestsList(value: Array<PeerManifest>): PeerManifestsResponse;
  clearPeerManifestsList(): PeerManifestsResponse;
  addPeerManifests(value?: PeerManifest, index?: number): PeerManifest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerManifestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeerManifestsResponse): PeerManifestsResponse.AsObject;
  static serializeBinaryToWriter(message: PeerManifestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerManifestsResponse;
  static deserializeBinaryFromReader(message: PeerManifestsResponse, reader: jspb.BinaryReader): PeerManifestsResponse;
}

export namespace PeerManifestsResponse {
  export type AsObject = {
    peerManifestsList: Array<PeerManifest.AsObject>,
  }
}

export class AcceptPendingTransactionRequest extends jspb.Message {
  getPendingTransaction(): PendingTransactionRef | undefined;
  setPendingTransaction(value?: PendingTransactionRef): AcceptPendingTransactionRequest;
  hasPendingTransaction(): boolean;
  clearPendingTransaction(): AcceptPendingTransactionRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): AcceptPendingTransactionRequest;
  hasSignature(): boolean;
  clearSignature(): AcceptPendingTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptPendingTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptPendingTransactionRequest): AcceptPendingTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptPendingTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptPendingTransactionRequest;
  static deserializeBinaryFromReader(message: AcceptPendingTransactionRequest, reader: jspb.BinaryReader): AcceptPendingTransactionRequest;
}

export namespace AcceptPendingTransactionRequest {
  export type AsObject = {
    pendingTransaction?: PendingTransactionRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class AllowAccountRequest extends jspb.Message {
  getOfAccount(): AccountRef | undefined;
  setOfAccount(value?: AccountRef): AllowAccountRequest;
  hasOfAccount(): boolean;
  clearOfAccount(): AllowAccountRequest;

  getPermittedAccount(): AccountRef | undefined;
  setPermittedAccount(value?: AccountRef): AllowAccountRequest;
  hasPermittedAccount(): boolean;
  clearPermittedAccount(): AllowAccountRequest;

  getPermittedOperationsList(): Array<string>;
  setPermittedOperationsList(value: Array<string>): AllowAccountRequest;
  clearPermittedOperationsList(): AllowAccountRequest;
  addPermittedOperations(value: string, index?: number): AllowAccountRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): AllowAccountRequest;
  hasAllowance(): boolean;
  clearAllowance(): AllowAccountRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): AllowAccountRequest;
  hasSignature(): boolean;
  clearSignature(): AllowAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllowAccountRequest): AllowAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AllowAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowAccountRequest;
  static deserializeBinaryFromReader(message: AllowAccountRequest, reader: jspb.BinaryReader): AllowAccountRequest;
}

export namespace AllowAccountRequest {
  export type AsObject = {
    ofAccount?: AccountRef.AsObject,
    permittedAccount?: AccountRef.AsObject,
    permittedOperationsList: Array<string>,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class AllowCoinRequest extends jspb.Message {
  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): AllowCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): AllowCoinRequest;

  getPermittedAccount(): AccountRef | undefined;
  setPermittedAccount(value?: AccountRef): AllowCoinRequest;
  hasPermittedAccount(): boolean;
  clearPermittedAccount(): AllowCoinRequest;

  getPermittedOperationsList(): Array<string>;
  setPermittedOperationsList(value: Array<string>): AllowCoinRequest;
  clearPermittedOperationsList(): AllowCoinRequest;
  addPermittedOperations(value: string, index?: number): AllowCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): AllowCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): AllowCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): AllowCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): AllowCoinRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): AllowCoinRequest;
  hasSignature(): boolean;
  clearSignature(): AllowCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllowCoinRequest): AllowCoinRequest.AsObject;
  static serializeBinaryToWriter(message: AllowCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowCoinRequest;
  static deserializeBinaryFromReader(message: AllowCoinRequest, reader: jspb.BinaryReader): AllowCoinRequest;
}

export namespace AllowCoinRequest {
  export type AsObject = {
    ofCoin?: CoinRef.AsObject,
    permittedAccount?: AccountRef.AsObject,
    permittedOperationsList: Array<string>,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class BalanceAccountRequest extends jspb.Message {
  getAccount(): AccountRef | undefined;
  setAccount(value?: AccountRef): BalanceAccountRequest;
  hasAccount(): boolean;
  clearAccount(): BalanceAccountRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): BalanceAccountRequest;
  hasAllowance(): boolean;
  clearAllowance(): BalanceAccountRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): BalanceAccountRequest;
  hasSignature(): boolean;
  clearSignature(): BalanceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceAccountRequest): BalanceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: BalanceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceAccountRequest;
  static deserializeBinaryFromReader(message: BalanceAccountRequest, reader: jspb.BinaryReader): BalanceAccountRequest;
}

export namespace BalanceAccountRequest {
  export type AsObject = {
    account?: AccountRef.AsObject,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class CoinsAccountRequest extends jspb.Message {
  getAccount(): AccountRef | undefined;
  setAccount(value?: AccountRef): CoinsAccountRequest;
  hasAccount(): boolean;
  clearAccount(): CoinsAccountRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): CoinsAccountRequest;
  hasAllowance(): boolean;
  clearAllowance(): CoinsAccountRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): CoinsAccountRequest;
  hasSignature(): boolean;
  clearSignature(): CoinsAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinsAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CoinsAccountRequest): CoinsAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CoinsAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinsAccountRequest;
  static deserializeBinaryFromReader(message: CoinsAccountRequest, reader: jspb.BinaryReader): CoinsAccountRequest;
}

export namespace CoinsAccountRequest {
  export type AsObject = {
    account?: AccountRef.AsObject,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class PendingTransactionsAccountRequest extends jspb.Message {
  getAccount(): AccountRef | undefined;
  setAccount(value?: AccountRef): PendingTransactionsAccountRequest;
  hasAccount(): boolean;
  clearAccount(): PendingTransactionsAccountRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): PendingTransactionsAccountRequest;
  hasAllowance(): boolean;
  clearAllowance(): PendingTransactionsAccountRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): PendingTransactionsAccountRequest;
  hasSignature(): boolean;
  clearSignature(): PendingTransactionsAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransactionsAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransactionsAccountRequest): PendingTransactionsAccountRequest.AsObject;
  static serializeBinaryToWriter(message: PendingTransactionsAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransactionsAccountRequest;
  static deserializeBinaryFromReader(message: PendingTransactionsAccountRequest, reader: jspb.BinaryReader): PendingTransactionsAccountRequest;
}

export namespace PendingTransactionsAccountRequest {
  export type AsObject = {
    account?: AccountRef.AsObject,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class IntersectCoinRequest extends jspb.Message {
  getAddressesList(): Array<Uint8Array | string>;
  setAddressesList(value: Array<Uint8Array | string>): IntersectCoinRequest;
  clearAddressesList(): IntersectCoinRequest;
  addAddresses(value: Uint8Array | string, index?: number): IntersectCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): IntersectCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): IntersectCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): IntersectCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): IntersectCoinRequest;

  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): IntersectCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): IntersectCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntersectCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntersectCoinRequest): IntersectCoinRequest.AsObject;
  static serializeBinaryToWriter(message: IntersectCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntersectCoinRequest;
  static deserializeBinaryFromReader(message: IntersectCoinRequest, reader: jspb.BinaryReader): IntersectCoinRequest;
}

export namespace IntersectCoinRequest {
  export type AsObject = {
    addressesList: Array<Uint8Array | string>,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    ofCoin?: CoinRef.AsObject,
  }
}

export class MergeCoinRequest extends jspb.Message {
  getCoinsList(): Array<CoinRef>;
  setCoinsList(value: Array<CoinRef>): MergeCoinRequest;
  clearCoinsList(): MergeCoinRequest;
  addCoins(value?: CoinRef, index?: number): CoinRef;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): MergeCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): MergeCoinRequest;

  getCoinAllowancesList(): Array<CoinAllowanceRef>;
  setCoinAllowancesList(value: Array<CoinAllowanceRef>): MergeCoinRequest;
  clearCoinAllowancesList(): MergeCoinRequest;
  addCoinAllowances(value?: CoinAllowanceRef, index?: number): CoinAllowanceRef;

  getSignature(): keys_pb.Ed448Signature | undefined;
  setSignature(value?: keys_pb.Ed448Signature): MergeCoinRequest;
  hasSignature(): boolean;
  clearSignature(): MergeCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeCoinRequest): MergeCoinRequest.AsObject;
  static serializeBinaryToWriter(message: MergeCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeCoinRequest;
  static deserializeBinaryFromReader(message: MergeCoinRequest, reader: jspb.BinaryReader): MergeCoinRequest;
}

export namespace MergeCoinRequest {
  export type AsObject = {
    coinsList: Array<CoinRef.AsObject>,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowancesList: Array<CoinAllowanceRef.AsObject>,
    signature?: keys_pb.Ed448Signature.AsObject,
  }
}

export class MintCoinRequest extends jspb.Message {
  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): MintCoinRequest;
  clearProofsList(): MintCoinRequest;
  addProofs(value: Uint8Array | string, index?: number): MintCoinRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): MintCoinRequest;
  hasAllowance(): boolean;
  clearAllowance(): MintCoinRequest;

  getSignature(): keys_pb.Ed448Signature | undefined;
  setSignature(value?: keys_pb.Ed448Signature): MintCoinRequest;
  hasSignature(): boolean;
  clearSignature(): MintCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MintCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MintCoinRequest): MintCoinRequest.AsObject;
  static serializeBinaryToWriter(message: MintCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MintCoinRequest;
  static deserializeBinaryFromReader(message: MintCoinRequest, reader: jspb.BinaryReader): MintCoinRequest;
}

export namespace MintCoinRequest {
  export type AsObject = {
    proofsList: Array<Uint8Array | string>,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: keys_pb.Ed448Signature.AsObject,
  }
}

export class MutualReceiveCoinRequest extends jspb.Message {
  getToAccount(): AccountRef | undefined;
  setToAccount(value?: AccountRef): MutualReceiveCoinRequest;
  hasToAccount(): boolean;
  clearToAccount(): MutualReceiveCoinRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): MutualReceiveCoinRequest;
  hasAllowance(): boolean;
  clearAllowance(): MutualReceiveCoinRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): MutualReceiveCoinRequest;
  hasSignature(): boolean;
  clearSignature(): MutualReceiveCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualReceiveCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutualReceiveCoinRequest): MutualReceiveCoinRequest.AsObject;
  static serializeBinaryToWriter(message: MutualReceiveCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualReceiveCoinRequest;
  static deserializeBinaryFromReader(message: MutualReceiveCoinRequest, reader: jspb.BinaryReader): MutualReceiveCoinRequest;
}

export namespace MutualReceiveCoinRequest {
  export type AsObject = {
    toAccount?: AccountRef.AsObject,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class MutualTransferCoinRequest extends jspb.Message {
  getRendezvous(): Uint8Array | string;
  getRendezvous_asU8(): Uint8Array;
  getRendezvous_asB64(): string;
  setRendezvous(value: Uint8Array | string): MutualTransferCoinRequest;

  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): MutualTransferCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): MutualTransferCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): MutualTransferCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): MutualTransferCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): MutualTransferCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): MutualTransferCoinRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): MutualTransferCoinRequest;
  hasSignature(): boolean;
  clearSignature(): MutualTransferCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualTransferCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutualTransferCoinRequest): MutualTransferCoinRequest.AsObject;
  static serializeBinaryToWriter(message: MutualTransferCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualTransferCoinRequest;
  static deserializeBinaryFromReader(message: MutualTransferCoinRequest, reader: jspb.BinaryReader): MutualTransferCoinRequest;
}

export namespace MutualTransferCoinRequest {
  export type AsObject = {
    rendezvous: Uint8Array | string,
    ofCoin?: CoinRef.AsObject,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class RevokeAccountRequest extends jspb.Message {
  getOfAccount(): AccountRef | undefined;
  setOfAccount(value?: AccountRef): RevokeAccountRequest;
  hasOfAccount(): boolean;
  clearOfAccount(): RevokeAccountRequest;

  getRevokedAllowance(): AccountAllowanceRef | undefined;
  setRevokedAllowance(value?: AccountAllowanceRef): RevokeAccountRequest;
  hasRevokedAllowance(): boolean;
  clearRevokedAllowance(): RevokeAccountRequest;

  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): RevokeAccountRequest;
  hasAllowance(): boolean;
  clearAllowance(): RevokeAccountRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): RevokeAccountRequest;
  hasSignature(): boolean;
  clearSignature(): RevokeAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountRequest): RevokeAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountRequest;
  static deserializeBinaryFromReader(message: RevokeAccountRequest, reader: jspb.BinaryReader): RevokeAccountRequest;
}

export namespace RevokeAccountRequest {
  export type AsObject = {
    ofAccount?: AccountRef.AsObject,
    revokedAllowance?: AccountAllowanceRef.AsObject,
    allowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class RevokeCoinRequest extends jspb.Message {
  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): RevokeCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): RevokeCoinRequest;

  getRevokedAllowance(): CoinAllowanceRef | undefined;
  setRevokedAllowance(value?: CoinAllowanceRef): RevokeCoinRequest;
  hasRevokedAllowance(): boolean;
  clearRevokedAllowance(): RevokeCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): RevokeCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): RevokeCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): RevokeCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): RevokeCoinRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): RevokeCoinRequest;
  hasSignature(): boolean;
  clearSignature(): RevokeCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCoinRequest): RevokeCoinRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCoinRequest;
  static deserializeBinaryFromReader(message: RevokeCoinRequest, reader: jspb.BinaryReader): RevokeCoinRequest;
}

export namespace RevokeCoinRequest {
  export type AsObject = {
    ofCoin?: CoinRef.AsObject,
    revokedAllowance?: CoinAllowanceRef.AsObject,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class SplitCoinRequest extends jspb.Message {
  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): SplitCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): SplitCoinRequest;

  getAmountsList(): Array<Uint8Array | string>;
  setAmountsList(value: Array<Uint8Array | string>): SplitCoinRequest;
  clearAmountsList(): SplitCoinRequest;
  addAmounts(value: Uint8Array | string, index?: number): SplitCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): SplitCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): SplitCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): SplitCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): SplitCoinRequest;

  getSignature(): keys_pb.Ed448Signature | undefined;
  setSignature(value?: keys_pb.Ed448Signature): SplitCoinRequest;
  hasSignature(): boolean;
  clearSignature(): SplitCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SplitCoinRequest): SplitCoinRequest.AsObject;
  static serializeBinaryToWriter(message: SplitCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitCoinRequest;
  static deserializeBinaryFromReader(message: SplitCoinRequest, reader: jspb.BinaryReader): SplitCoinRequest;
}

export namespace SplitCoinRequest {
  export type AsObject = {
    ofCoin?: CoinRef.AsObject,
    amountsList: Array<Uint8Array | string>,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    signature?: keys_pb.Ed448Signature.AsObject,
  }
}

export class TransferCoinRequest extends jspb.Message {
  getToAccount(): AccountRef | undefined;
  setToAccount(value?: AccountRef): TransferCoinRequest;
  hasToAccount(): boolean;
  clearToAccount(): TransferCoinRequest;

  getRefundAccount(): AccountRef | undefined;
  setRefundAccount(value?: AccountRef): TransferCoinRequest;
  hasRefundAccount(): boolean;
  clearRefundAccount(): TransferCoinRequest;

  getOfCoin(): CoinRef | undefined;
  setOfCoin(value?: CoinRef): TransferCoinRequest;
  hasOfCoin(): boolean;
  clearOfCoin(): TransferCoinRequest;

  getExpiry(): number;
  setExpiry(value: number): TransferCoinRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): TransferCoinRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): TransferCoinRequest;

  getCoinAllowance(): CoinAllowanceRef | undefined;
  setCoinAllowance(value?: CoinAllowanceRef): TransferCoinRequest;
  hasCoinAllowance(): boolean;
  clearCoinAllowance(): TransferCoinRequest;

  getSignature(): keys_pb.Ed448Signature | undefined;
  setSignature(value?: keys_pb.Ed448Signature): TransferCoinRequest;
  hasSignature(): boolean;
  clearSignature(): TransferCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCoinRequest): TransferCoinRequest.AsObject;
  static serializeBinaryToWriter(message: TransferCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCoinRequest;
  static deserializeBinaryFromReader(message: TransferCoinRequest, reader: jspb.BinaryReader): TransferCoinRequest;
}

export namespace TransferCoinRequest {
  export type AsObject = {
    toAccount?: AccountRef.AsObject,
    refundAccount?: AccountRef.AsObject,
    ofCoin?: CoinRef.AsObject,
    expiry: number,
    accountAllowance?: AccountAllowanceRef.AsObject,
    coinAllowance?: CoinAllowanceRef.AsObject,
    signature?: keys_pb.Ed448Signature.AsObject,
  }
}

export class ApprovePendingTransactionRequest extends jspb.Message {
  getPendingTransaction(): PendingTransactionRef | undefined;
  setPendingTransaction(value?: PendingTransactionRef): ApprovePendingTransactionRequest;
  hasPendingTransaction(): boolean;
  clearPendingTransaction(): ApprovePendingTransactionRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): ApprovePendingTransactionRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): ApprovePendingTransactionRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): ApprovePendingTransactionRequest;
  hasSignature(): boolean;
  clearSignature(): ApprovePendingTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovePendingTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovePendingTransactionRequest): ApprovePendingTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: ApprovePendingTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovePendingTransactionRequest;
  static deserializeBinaryFromReader(message: ApprovePendingTransactionRequest, reader: jspb.BinaryReader): ApprovePendingTransactionRequest;
}

export namespace ApprovePendingTransactionRequest {
  export type AsObject = {
    pendingTransaction?: PendingTransactionRef.AsObject,
    accountAllowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class RejectPendingTransactionRequest extends jspb.Message {
  getPendingTransaction(): PendingTransactionRef | undefined;
  setPendingTransaction(value?: PendingTransactionRef): RejectPendingTransactionRequest;
  hasPendingTransaction(): boolean;
  clearPendingTransaction(): RejectPendingTransactionRequest;

  getAccountAllowance(): AccountAllowanceRef | undefined;
  setAccountAllowance(value?: AccountAllowanceRef): RejectPendingTransactionRequest;
  hasAccountAllowance(): boolean;
  clearAccountAllowance(): RejectPendingTransactionRequest;

  getSignature(): Signature | undefined;
  setSignature(value?: Signature): RejectPendingTransactionRequest;
  hasSignature(): boolean;
  clearSignature(): RejectPendingTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectPendingTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectPendingTransactionRequest): RejectPendingTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: RejectPendingTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectPendingTransactionRequest;
  static deserializeBinaryFromReader(message: RejectPendingTransactionRequest, reader: jspb.BinaryReader): RejectPendingTransactionRequest;
}

export namespace RejectPendingTransactionRequest {
  export type AsObject = {
    pendingTransaction?: PendingTransactionRef.AsObject,
    accountAllowance?: AccountAllowanceRef.AsObject,
    signature?: Signature.AsObject,
  }
}

export class InlineKey extends jspb.Message {
  getRef(): Uint8Array | string;
  getRef_asU8(): Uint8Array;
  getRef_asB64(): string;
  setRef(value: Uint8Array | string): InlineKey;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): InlineKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InlineKey.AsObject;
  static toObject(includeInstance: boolean, msg: InlineKey): InlineKey.AsObject;
  static serializeBinaryToWriter(message: InlineKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InlineKey;
  static deserializeBinaryFromReader(message: InlineKey, reader: jspb.BinaryReader): InlineKey;
}

export namespace InlineKey {
  export type AsObject = {
    ref: Uint8Array | string,
    key: Uint8Array | string,
  }
}

export class KeyRing extends jspb.Message {
  getKeysList(): Array<InlineKey>;
  setKeysList(value: Array<InlineKey>): KeyRing;
  clearKeysList(): KeyRing;
  addKeys(value?: InlineKey, index?: number): InlineKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRing.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRing): KeyRing.AsObject;
  static serializeBinaryToWriter(message: KeyRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRing;
  static deserializeBinaryFromReader(message: KeyRing, reader: jspb.BinaryReader): KeyRing;
}

export namespace KeyRing {
  export type AsObject = {
    keysList: Array<InlineKey.AsObject>,
  }
}

export class Confirmation extends jspb.Message {
  getMessageId(): Uint8Array | string;
  getMessageId_asU8(): Uint8Array;
  getMessageId_asB64(): string;
  setMessageId(value: Uint8Array | string): Confirmation;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): Confirmation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Confirmation.AsObject;
  static toObject(includeInstance: boolean, msg: Confirmation): Confirmation.AsObject;
  static serializeBinaryToWriter(message: Confirmation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Confirmation;
  static deserializeBinaryFromReader(message: Confirmation, reader: jspb.BinaryReader): Confirmation;
}

export namespace Confirmation {
  export type AsObject = {
    messageId: Uint8Array | string,
    proof: Uint8Array | string,
  }
}

export class DeliveryData extends jspb.Message {
  getSharedKey(): InlineKey | undefined;
  setSharedKey(value?: InlineKey): DeliveryData;
  hasSharedKey(): boolean;
  clearSharedKey(): DeliveryData;

  getConfirmation(): Confirmation | undefined;
  setConfirmation(value?: Confirmation): DeliveryData;
  hasConfirmation(): boolean;
  clearConfirmation(): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryData.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryData): DeliveryData.AsObject;
  static serializeBinaryToWriter(message: DeliveryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryData;
  static deserializeBinaryFromReader(message: DeliveryData, reader: jspb.BinaryReader): DeliveryData;
}

export namespace DeliveryData {
  export type AsObject = {
    sharedKey?: InlineKey.AsObject,
    confirmation?: Confirmation.AsObject,
  }
}

export class DeliveryMethod extends jspb.Message {
  getDeliveryType(): number;
  setDeliveryType(value: number): DeliveryMethod;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): DeliveryMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryMethod.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryMethod): DeliveryMethod.AsObject;
  static serializeBinaryToWriter(message: DeliveryMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryMethod;
  static deserializeBinaryFromReader(message: DeliveryMethod, reader: jspb.BinaryReader): DeliveryMethod;
}

export namespace DeliveryMethod {
  export type AsObject = {
    deliveryType: number,
    address: Uint8Array | string,
  }
}

export class DecryptableAllowAccountRequest extends jspb.Message {
  getRequest(): AllowAccountRequest | undefined;
  setRequest(value?: AllowAccountRequest): DecryptableAllowAccountRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableAllowAccountRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableAllowAccountRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableAllowAccountRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableAllowAccountRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableAllowAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableAllowAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableAllowAccountRequest): DecryptableAllowAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableAllowAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableAllowAccountRequest;
  static deserializeBinaryFromReader(message: DecryptableAllowAccountRequest, reader: jspb.BinaryReader): DecryptableAllowAccountRequest;
}

export namespace DecryptableAllowAccountRequest {
  export type AsObject = {
    request?: AllowAccountRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableBalanceAccountRequest extends jspb.Message {
  getRequest(): BalanceAccountRequest | undefined;
  setRequest(value?: BalanceAccountRequest): DecryptableBalanceAccountRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableBalanceAccountRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableBalanceAccountRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableBalanceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableBalanceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableBalanceAccountRequest): DecryptableBalanceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableBalanceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableBalanceAccountRequest;
  static deserializeBinaryFromReader(message: DecryptableBalanceAccountRequest, reader: jspb.BinaryReader): DecryptableBalanceAccountRequest;
}

export namespace DecryptableBalanceAccountRequest {
  export type AsObject = {
    request?: BalanceAccountRequest.AsObject,
    keyRing?: KeyRing.AsObject,
  }
}

export class DecryptableCoinsAccountRequest extends jspb.Message {
  getRequest(): CoinsAccountRequest | undefined;
  setRequest(value?: CoinsAccountRequest): DecryptableCoinsAccountRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableCoinsAccountRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableCoinsAccountRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableCoinsAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableCoinsAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableCoinsAccountRequest): DecryptableCoinsAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableCoinsAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableCoinsAccountRequest;
  static deserializeBinaryFromReader(message: DecryptableCoinsAccountRequest, reader: jspb.BinaryReader): DecryptableCoinsAccountRequest;
}

export namespace DecryptableCoinsAccountRequest {
  export type AsObject = {
    request?: CoinsAccountRequest.AsObject,
    keyRing?: KeyRing.AsObject,
  }
}

export class DecryptableRevokeAccountRequest extends jspb.Message {
  getRequest(): RevokeAccountRequest | undefined;
  setRequest(value?: RevokeAccountRequest): DecryptableRevokeAccountRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableRevokeAccountRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableRevokeAccountRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableRevokeAccountRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableRevokeAccountRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableRevokeAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableRevokeAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableRevokeAccountRequest): DecryptableRevokeAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableRevokeAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableRevokeAccountRequest;
  static deserializeBinaryFromReader(message: DecryptableRevokeAccountRequest, reader: jspb.BinaryReader): DecryptableRevokeAccountRequest;
}

export namespace DecryptableRevokeAccountRequest {
  export type AsObject = {
    request?: RevokeAccountRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptablePendingTransactionsAccountRequest extends jspb.Message {
  getRequest(): PendingTransactionsAccountRequest | undefined;
  setRequest(value?: PendingTransactionsAccountRequest): DecryptablePendingTransactionsAccountRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptablePendingTransactionsAccountRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptablePendingTransactionsAccountRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptablePendingTransactionsAccountRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptablePendingTransactionsAccountRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptablePendingTransactionsAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptablePendingTransactionsAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptablePendingTransactionsAccountRequest): DecryptablePendingTransactionsAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptablePendingTransactionsAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptablePendingTransactionsAccountRequest;
  static deserializeBinaryFromReader(message: DecryptablePendingTransactionsAccountRequest, reader: jspb.BinaryReader): DecryptablePendingTransactionsAccountRequest;
}

export namespace DecryptablePendingTransactionsAccountRequest {
  export type AsObject = {
    request?: PendingTransactionsAccountRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableAllowCoinRequest extends jspb.Message {
  getRequest(): AllowCoinRequest | undefined;
  setRequest(value?: AllowCoinRequest): DecryptableAllowCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableAllowCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableAllowCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableAllowCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableAllowCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableAllowCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableAllowCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableAllowCoinRequest): DecryptableAllowCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableAllowCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableAllowCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableAllowCoinRequest, reader: jspb.BinaryReader): DecryptableAllowCoinRequest;
}

export namespace DecryptableAllowCoinRequest {
  export type AsObject = {
    request?: AllowCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableIntersectCoinRequest extends jspb.Message {
  getRequest(): IntersectCoinRequest | undefined;
  setRequest(value?: IntersectCoinRequest): DecryptableIntersectCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableIntersectCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableIntersectCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableIntersectCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableIntersectCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableIntersectCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableIntersectCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableIntersectCoinRequest): DecryptableIntersectCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableIntersectCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableIntersectCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableIntersectCoinRequest, reader: jspb.BinaryReader): DecryptableIntersectCoinRequest;
}

export namespace DecryptableIntersectCoinRequest {
  export type AsObject = {
    request?: IntersectCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableMergeCoinRequest extends jspb.Message {
  getRequest(): MergeCoinRequest | undefined;
  setRequest(value?: MergeCoinRequest): DecryptableMergeCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableMergeCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableMergeCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableMergeCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableMergeCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableMergeCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableMergeCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableMergeCoinRequest): DecryptableMergeCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableMergeCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableMergeCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableMergeCoinRequest, reader: jspb.BinaryReader): DecryptableMergeCoinRequest;
}

export namespace DecryptableMergeCoinRequest {
  export type AsObject = {
    request?: MergeCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableMintCoinRequest extends jspb.Message {
  getRequest(): MintCoinRequest | undefined;
  setRequest(value?: MintCoinRequest): DecryptableMintCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableMintCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableMintCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableMintCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableMintCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableMintCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableMintCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableMintCoinRequest): DecryptableMintCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableMintCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableMintCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableMintCoinRequest, reader: jspb.BinaryReader): DecryptableMintCoinRequest;
}

export namespace DecryptableMintCoinRequest {
  export type AsObject = {
    request?: MintCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableMutualReceiveCoinRequest extends jspb.Message {
  getRequest(): MutualReceiveCoinRequest | undefined;
  setRequest(value?: MutualReceiveCoinRequest): DecryptableMutualReceiveCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableMutualReceiveCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableMutualReceiveCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableMutualReceiveCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableMutualReceiveCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableMutualReceiveCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableMutualReceiveCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableMutualReceiveCoinRequest): DecryptableMutualReceiveCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableMutualReceiveCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableMutualReceiveCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableMutualReceiveCoinRequest, reader: jspb.BinaryReader): DecryptableMutualReceiveCoinRequest;
}

export namespace DecryptableMutualReceiveCoinRequest {
  export type AsObject = {
    request?: MutualReceiveCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableMutualTransferCoinRequest extends jspb.Message {
  getRequest(): MutualTransferCoinRequest | undefined;
  setRequest(value?: MutualTransferCoinRequest): DecryptableMutualTransferCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableMutualTransferCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableMutualTransferCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableMutualTransferCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableMutualTransferCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableMutualTransferCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableMutualTransferCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableMutualTransferCoinRequest): DecryptableMutualTransferCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableMutualTransferCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableMutualTransferCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableMutualTransferCoinRequest, reader: jspb.BinaryReader): DecryptableMutualTransferCoinRequest;
}

export namespace DecryptableMutualTransferCoinRequest {
  export type AsObject = {
    request?: MutualTransferCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableRevokeCoinRequest extends jspb.Message {
  getRequest(): RevokeCoinRequest | undefined;
  setRequest(value?: RevokeCoinRequest): DecryptableRevokeCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableRevokeCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableRevokeCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableRevokeCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableRevokeCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableRevokeCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableRevokeCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableRevokeCoinRequest): DecryptableRevokeCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableRevokeCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableRevokeCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableRevokeCoinRequest, reader: jspb.BinaryReader): DecryptableRevokeCoinRequest;
}

export namespace DecryptableRevokeCoinRequest {
  export type AsObject = {
    request?: RevokeCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableSplitCoinRequest extends jspb.Message {
  getRequest(): SplitCoinRequest | undefined;
  setRequest(value?: SplitCoinRequest): DecryptableSplitCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableSplitCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableSplitCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableSplitCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableSplitCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableSplitCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableSplitCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableSplitCoinRequest): DecryptableSplitCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableSplitCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableSplitCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableSplitCoinRequest, reader: jspb.BinaryReader): DecryptableSplitCoinRequest;
}

export namespace DecryptableSplitCoinRequest {
  export type AsObject = {
    request?: SplitCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableTransferCoinRequest extends jspb.Message {
  getRequest(): TransferCoinRequest | undefined;
  setRequest(value?: TransferCoinRequest): DecryptableTransferCoinRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableTransferCoinRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableTransferCoinRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableTransferCoinRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableTransferCoinRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableTransferCoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableTransferCoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableTransferCoinRequest): DecryptableTransferCoinRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableTransferCoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableTransferCoinRequest;
  static deserializeBinaryFromReader(message: DecryptableTransferCoinRequest, reader: jspb.BinaryReader): DecryptableTransferCoinRequest;
}

export namespace DecryptableTransferCoinRequest {
  export type AsObject = {
    request?: TransferCoinRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableApprovePendingTransactionRequest extends jspb.Message {
  getRequest(): ApprovePendingTransactionRequest | undefined;
  setRequest(value?: ApprovePendingTransactionRequest): DecryptableApprovePendingTransactionRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableApprovePendingTransactionRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableApprovePendingTransactionRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableApprovePendingTransactionRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableApprovePendingTransactionRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableApprovePendingTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableApprovePendingTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableApprovePendingTransactionRequest): DecryptableApprovePendingTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableApprovePendingTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableApprovePendingTransactionRequest;
  static deserializeBinaryFromReader(message: DecryptableApprovePendingTransactionRequest, reader: jspb.BinaryReader): DecryptableApprovePendingTransactionRequest;
}

export namespace DecryptableApprovePendingTransactionRequest {
  export type AsObject = {
    request?: ApprovePendingTransactionRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class DecryptableRejectPendingTransactionRequest extends jspb.Message {
  getRequest(): RejectPendingTransactionRequest | undefined;
  setRequest(value?: RejectPendingTransactionRequest): DecryptableRejectPendingTransactionRequest;
  hasRequest(): boolean;
  clearRequest(): DecryptableRejectPendingTransactionRequest;

  getKeyRing(): KeyRing | undefined;
  setKeyRing(value?: KeyRing): DecryptableRejectPendingTransactionRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): DecryptableRejectPendingTransactionRequest;

  getDeliveryMethod(): DeliveryMethod | undefined;
  setDeliveryMethod(value?: DeliveryMethod): DecryptableRejectPendingTransactionRequest;
  hasDeliveryMethod(): boolean;
  clearDeliveryMethod(): DecryptableRejectPendingTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptableRejectPendingTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptableRejectPendingTransactionRequest): DecryptableRejectPendingTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptableRejectPendingTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptableRejectPendingTransactionRequest;
  static deserializeBinaryFromReader(message: DecryptableRejectPendingTransactionRequest, reader: jspb.BinaryReader): DecryptableRejectPendingTransactionRequest;
}

export namespace DecryptableRejectPendingTransactionRequest {
  export type AsObject = {
    request?: RejectPendingTransactionRequest.AsObject,
    keyRing?: KeyRing.AsObject,
    deliveryMethod?: DeliveryMethod.AsObject,
  }
}

export class CoinInfo extends jspb.Message {
  getCoin(): CoinRef | undefined;
  setCoin(value?: CoinRef): CoinInfo;
  hasCoin(): boolean;
  clearCoin(): CoinInfo;

  getBalance(): Uint8Array | string;
  getBalance_asU8(): Uint8Array;
  getBalance_asB64(): string;
  setBalance(value: Uint8Array | string): CoinInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CoinInfo): CoinInfo.AsObject;
  static serializeBinaryToWriter(message: CoinInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinInfo;
  static deserializeBinaryFromReader(message: CoinInfo, reader: jspb.BinaryReader): CoinInfo;
}

export namespace CoinInfo {
  export type AsObject = {
    coin?: CoinRef.AsObject,
    balance: Uint8Array | string,
  }
}

export class PendingTransactionInfo extends jspb.Message {
  getPendingTransaction(): PendingTransactionRef | undefined;
  setPendingTransaction(value?: PendingTransactionRef): PendingTransactionInfo;
  hasPendingTransaction(): boolean;
  clearPendingTransaction(): PendingTransactionInfo;

  getCoin(): CoinInfo | undefined;
  setCoin(value?: CoinInfo): PendingTransactionInfo;
  hasCoin(): boolean;
  clearCoin(): PendingTransactionInfo;

  getRefundAccount(): AccountRef | undefined;
  setRefundAccount(value?: AccountRef): PendingTransactionInfo;
  hasRefundAccount(): boolean;
  clearRefundAccount(): PendingTransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransactionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransactionInfo): PendingTransactionInfo.AsObject;
  static serializeBinaryToWriter(message: PendingTransactionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransactionInfo;
  static deserializeBinaryFromReader(message: PendingTransactionInfo, reader: jspb.BinaryReader): PendingTransactionInfo;
}

export namespace PendingTransactionInfo {
  export type AsObject = {
    pendingTransaction?: PendingTransactionRef.AsObject,
    coin?: CoinInfo.AsObject,
    refundAccount?: AccountRef.AsObject,
  }
}

export class AllowAccountResponse extends jspb.Message {
  getAllowance(): AccountAllowanceRef | undefined;
  setAllowance(value?: AccountAllowanceRef): AllowAccountResponse;
  hasAllowance(): boolean;
  clearAllowance(): AllowAccountResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): AllowAccountResponse;
  clearDeliveriesList(): AllowAccountResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllowAccountResponse): AllowAccountResponse.AsObject;
  static serializeBinaryToWriter(message: AllowAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowAccountResponse;
  static deserializeBinaryFromReader(message: AllowAccountResponse, reader: jspb.BinaryReader): AllowAccountResponse;
}

export namespace AllowAccountResponse {
  export type AsObject = {
    allowance?: AccountAllowanceRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class BalanceAccountResponse extends jspb.Message {
  getBalance(): Uint8Array | string;
  getBalance_asU8(): Uint8Array;
  getBalance_asB64(): string;
  setBalance(value: Uint8Array | string): BalanceAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceAccountResponse): BalanceAccountResponse.AsObject;
  static serializeBinaryToWriter(message: BalanceAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceAccountResponse;
  static deserializeBinaryFromReader(message: BalanceAccountResponse, reader: jspb.BinaryReader): BalanceAccountResponse;
}

export namespace BalanceAccountResponse {
  export type AsObject = {
    balance: Uint8Array | string,
  }
}

export class CoinsAccountResponse extends jspb.Message {
  getCoinsList(): Array<CoinInfo>;
  setCoinsList(value: Array<CoinInfo>): CoinsAccountResponse;
  clearCoinsList(): CoinsAccountResponse;
  addCoins(value?: CoinInfo, index?: number): CoinInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinsAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CoinsAccountResponse): CoinsAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CoinsAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinsAccountResponse;
  static deserializeBinaryFromReader(message: CoinsAccountResponse, reader: jspb.BinaryReader): CoinsAccountResponse;
}

export namespace CoinsAccountResponse {
  export type AsObject = {
    coinsList: Array<CoinInfo.AsObject>,
  }
}

export class PendingTransactionsAccountResponse extends jspb.Message {
  getPendingTransactionsList(): Array<PendingTransactionInfo>;
  setPendingTransactionsList(value: Array<PendingTransactionInfo>): PendingTransactionsAccountResponse;
  clearPendingTransactionsList(): PendingTransactionsAccountResponse;
  addPendingTransactions(value?: PendingTransactionInfo, index?: number): PendingTransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransactionsAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransactionsAccountResponse): PendingTransactionsAccountResponse.AsObject;
  static serializeBinaryToWriter(message: PendingTransactionsAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransactionsAccountResponse;
  static deserializeBinaryFromReader(message: PendingTransactionsAccountResponse, reader: jspb.BinaryReader): PendingTransactionsAccountResponse;
}

export namespace PendingTransactionsAccountResponse {
  export type AsObject = {
    pendingTransactionsList: Array<PendingTransactionInfo.AsObject>,
  }
}

export class RevokeAccountResponse extends jspb.Message {
  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): RevokeAccountResponse;
  clearDeliveriesList(): RevokeAccountResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountResponse): RevokeAccountResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountResponse;
  static deserializeBinaryFromReader(message: RevokeAccountResponse, reader: jspb.BinaryReader): RevokeAccountResponse;
}

export namespace RevokeAccountResponse {
  export type AsObject = {
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class AllowCoinResponse extends jspb.Message {
  getAllowance(): CoinAllowanceRef | undefined;
  setAllowance(value?: CoinAllowanceRef): AllowCoinResponse;
  hasAllowance(): boolean;
  clearAllowance(): AllowCoinResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): AllowCoinResponse;
  clearDeliveriesList(): AllowCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllowCoinResponse): AllowCoinResponse.AsObject;
  static serializeBinaryToWriter(message: AllowCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowCoinResponse;
  static deserializeBinaryFromReader(message: AllowCoinResponse, reader: jspb.BinaryReader): AllowCoinResponse;
}

export namespace AllowCoinResponse {
  export type AsObject = {
    allowance?: CoinAllowanceRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class IntersectCoinResponse extends jspb.Message {
  getIntersects(): boolean;
  setIntersects(value: boolean): IntersectCoinResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntersectCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IntersectCoinResponse): IntersectCoinResponse.AsObject;
  static serializeBinaryToWriter(message: IntersectCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntersectCoinResponse;
  static deserializeBinaryFromReader(message: IntersectCoinResponse, reader: jspb.BinaryReader): IntersectCoinResponse;
}

export namespace IntersectCoinResponse {
  export type AsObject = {
    intersects: boolean,
  }
}

export class MergeCoinResponse extends jspb.Message {
  getCoin(): CoinRef | undefined;
  setCoin(value?: CoinRef): MergeCoinResponse;
  hasCoin(): boolean;
  clearCoin(): MergeCoinResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): MergeCoinResponse;
  clearDeliveriesList(): MergeCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MergeCoinResponse): MergeCoinResponse.AsObject;
  static serializeBinaryToWriter(message: MergeCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeCoinResponse;
  static deserializeBinaryFromReader(message: MergeCoinResponse, reader: jspb.BinaryReader): MergeCoinResponse;
}

export namespace MergeCoinResponse {
  export type AsObject = {
    coin?: CoinRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class MintCoinResponse extends jspb.Message {
  getCoinsList(): Array<CoinInfo>;
  setCoinsList(value: Array<CoinInfo>): MintCoinResponse;
  clearCoinsList(): MintCoinResponse;
  addCoins(value?: CoinInfo, index?: number): CoinInfo;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): MintCoinResponse;
  clearDeliveriesList(): MintCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MintCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MintCoinResponse): MintCoinResponse.AsObject;
  static serializeBinaryToWriter(message: MintCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MintCoinResponse;
  static deserializeBinaryFromReader(message: MintCoinResponse, reader: jspb.BinaryReader): MintCoinResponse;
}

export namespace MintCoinResponse {
  export type AsObject = {
    coinsList: Array<CoinInfo.AsObject>,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class MutualReceiveCoinResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): MutualReceiveCoinResponse;

  getRendezvous(): Uint8Array | string;
  getRendezvous_asU8(): Uint8Array;
  getRendezvous_asB64(): string;
  setRendezvous(value: Uint8Array | string): MutualReceiveCoinResponse;

  getCoin(): CoinRef | undefined;
  setCoin(value?: CoinRef): MutualReceiveCoinResponse;
  hasCoin(): boolean;
  clearCoin(): MutualReceiveCoinResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): MutualReceiveCoinResponse;
  clearDeliveriesList(): MutualReceiveCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualReceiveCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutualReceiveCoinResponse): MutualReceiveCoinResponse.AsObject;
  static serializeBinaryToWriter(message: MutualReceiveCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualReceiveCoinResponse;
  static deserializeBinaryFromReader(message: MutualReceiveCoinResponse, reader: jspb.BinaryReader): MutualReceiveCoinResponse;
}

export namespace MutualReceiveCoinResponse {
  export type AsObject = {
    status: number,
    rendezvous: Uint8Array | string,
    coin?: CoinRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class MutualTransferCoinResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): MutualTransferCoinResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): MutualTransferCoinResponse;
  clearDeliveriesList(): MutualTransferCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualTransferCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutualTransferCoinResponse): MutualTransferCoinResponse.AsObject;
  static serializeBinaryToWriter(message: MutualTransferCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualTransferCoinResponse;
  static deserializeBinaryFromReader(message: MutualTransferCoinResponse, reader: jspb.BinaryReader): MutualTransferCoinResponse;
}

export namespace MutualTransferCoinResponse {
  export type AsObject = {
    status: number,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class RevokeCoinResponse extends jspb.Message {
  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): RevokeCoinResponse;
  clearDeliveriesList(): RevokeCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCoinResponse): RevokeCoinResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCoinResponse;
  static deserializeBinaryFromReader(message: RevokeCoinResponse, reader: jspb.BinaryReader): RevokeCoinResponse;
}

export namespace RevokeCoinResponse {
  export type AsObject = {
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class SplitCoinResponse extends jspb.Message {
  getCoinsList(): Array<CoinRef>;
  setCoinsList(value: Array<CoinRef>): SplitCoinResponse;
  clearCoinsList(): SplitCoinResponse;
  addCoins(value?: CoinRef, index?: number): CoinRef;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): SplitCoinResponse;
  clearDeliveriesList(): SplitCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SplitCoinResponse): SplitCoinResponse.AsObject;
  static serializeBinaryToWriter(message: SplitCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitCoinResponse;
  static deserializeBinaryFromReader(message: SplitCoinResponse, reader: jspb.BinaryReader): SplitCoinResponse;
}

export namespace SplitCoinResponse {
  export type AsObject = {
    coinsList: Array<CoinRef.AsObject>,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class TransferCoinResponse extends jspb.Message {
  getPendingTransaction(): PendingTransactionRef | undefined;
  setPendingTransaction(value?: PendingTransactionRef): TransferCoinResponse;
  hasPendingTransaction(): boolean;
  clearPendingTransaction(): TransferCoinResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): TransferCoinResponse;
  clearDeliveriesList(): TransferCoinResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCoinResponse): TransferCoinResponse.AsObject;
  static serializeBinaryToWriter(message: TransferCoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCoinResponse;
  static deserializeBinaryFromReader(message: TransferCoinResponse, reader: jspb.BinaryReader): TransferCoinResponse;
}

export namespace TransferCoinResponse {
  export type AsObject = {
    pendingTransaction?: PendingTransactionRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class ApprovePendingTransactionResponse extends jspb.Message {
  getCoin(): CoinRef | undefined;
  setCoin(value?: CoinRef): ApprovePendingTransactionResponse;
  hasCoin(): boolean;
  clearCoin(): ApprovePendingTransactionResponse;

  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): ApprovePendingTransactionResponse;
  clearDeliveriesList(): ApprovePendingTransactionResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovePendingTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovePendingTransactionResponse): ApprovePendingTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: ApprovePendingTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovePendingTransactionResponse;
  static deserializeBinaryFromReader(message: ApprovePendingTransactionResponse, reader: jspb.BinaryReader): ApprovePendingTransactionResponse;
}

export namespace ApprovePendingTransactionResponse {
  export type AsObject = {
    coin?: CoinRef.AsObject,
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class RejectPendingTransactionResponse extends jspb.Message {
  getDeliveriesList(): Array<DeliveryData>;
  setDeliveriesList(value: Array<DeliveryData>): RejectPendingTransactionResponse;
  clearDeliveriesList(): RejectPendingTransactionResponse;
  addDeliveries(value?: DeliveryData, index?: number): DeliveryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectPendingTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectPendingTransactionResponse): RejectPendingTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: RejectPendingTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectPendingTransactionResponse;
  static deserializeBinaryFromReader(message: RejectPendingTransactionResponse, reader: jspb.BinaryReader): RejectPendingTransactionResponse;
}

export namespace RejectPendingTransactionResponse {
  export type AsObject = {
    deliveriesList: Array<DeliveryData.AsObject>,
  }
}

export class SendMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
  }
}

export class GetTokensByAccountRequest extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): GetTokensByAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokensByAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokensByAccountRequest): GetTokensByAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokensByAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokensByAccountRequest;
  static deserializeBinaryFromReader(message: GetTokensByAccountRequest, reader: jspb.BinaryReader): GetTokensByAccountRequest;
}

export namespace GetTokensByAccountRequest {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class TokensByAccountResponse extends jspb.Message {
  getCoinsList(): Array<Coin>;
  setCoinsList(value: Array<Coin>): TokensByAccountResponse;
  clearCoinsList(): TokensByAccountResponse;
  addCoins(value?: Coin, index?: number): Coin;

  getFrameNumbersList(): Array<number>;
  setFrameNumbersList(value: Array<number>): TokensByAccountResponse;
  clearFrameNumbersList(): TokensByAccountResponse;
  addFrameNumbers(value: number, index?: number): TokensByAccountResponse;

  getAddressesList(): Array<Uint8Array | string>;
  setAddressesList(value: Array<Uint8Array | string>): TokensByAccountResponse;
  clearAddressesList(): TokensByAccountResponse;
  addAddresses(value: Uint8Array | string, index?: number): TokensByAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensByAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokensByAccountResponse): TokensByAccountResponse.AsObject;
  static serializeBinaryToWriter(message: TokensByAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensByAccountResponse;
  static deserializeBinaryFromReader(message: TokensByAccountResponse, reader: jspb.BinaryReader): TokensByAccountResponse;
}

export namespace TokensByAccountResponse {
  export type AsObject = {
    coinsList: Array<Coin.AsObject>,
    frameNumbersList: Array<number>,
    addressesList: Array<Uint8Array | string>,
  }
}

export class GetPreCoinProofsByAccountRequest extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): GetPreCoinProofsByAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPreCoinProofsByAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPreCoinProofsByAccountRequest): GetPreCoinProofsByAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetPreCoinProofsByAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPreCoinProofsByAccountRequest;
  static deserializeBinaryFromReader(message: GetPreCoinProofsByAccountRequest, reader: jspb.BinaryReader): GetPreCoinProofsByAccountRequest;
}

export namespace GetPreCoinProofsByAccountRequest {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class PreCoinProofsByAccountResponse extends jspb.Message {
  getProofsList(): Array<PreCoinProof>;
  setProofsList(value: Array<PreCoinProof>): PreCoinProofsByAccountResponse;
  clearProofsList(): PreCoinProofsByAccountResponse;
  addProofs(value?: PreCoinProof, index?: number): PreCoinProof;

  getFrameNumbersList(): Array<number>;
  setFrameNumbersList(value: Array<number>): PreCoinProofsByAccountResponse;
  clearFrameNumbersList(): PreCoinProofsByAccountResponse;
  addFrameNumbers(value: number, index?: number): PreCoinProofsByAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreCoinProofsByAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreCoinProofsByAccountResponse): PreCoinProofsByAccountResponse.AsObject;
  static serializeBinaryToWriter(message: PreCoinProofsByAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreCoinProofsByAccountResponse;
  static deserializeBinaryFromReader(message: PreCoinProofsByAccountResponse, reader: jspb.BinaryReader): PreCoinProofsByAccountResponse;
}

export namespace PreCoinProofsByAccountResponse {
  export type AsObject = {
    proofsList: Array<PreCoinProof.AsObject>,
    frameNumbersList: Array<number>,
  }
}

