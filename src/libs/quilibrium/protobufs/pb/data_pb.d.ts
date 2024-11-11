import * as jspb from 'google-protobuf'

import * as channel_pb from './channel_pb'; // proto import: "channel.proto"
import * as clock_pb from './clock_pb'; // proto import: "clock.proto"
import * as keys_pb from './keys_pb'; // proto import: "keys.proto"
import * as node_pb from './node_pb'; // proto import: "node.proto"


export class DataPeerListAnnounce extends jspb.Message {
  getPeerListList(): Array<DataPeer>;
  setPeerListList(value: Array<DataPeer>): DataPeerListAnnounce;
  clearPeerListList(): DataPeerListAnnounce;
  addPeerList(value?: DataPeer, index?: number): DataPeer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPeerListAnnounce.AsObject;
  static toObject(includeInstance: boolean, msg: DataPeerListAnnounce): DataPeerListAnnounce.AsObject;
  static serializeBinaryToWriter(message: DataPeerListAnnounce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPeerListAnnounce;
  static deserializeBinaryFromReader(message: DataPeerListAnnounce, reader: jspb.BinaryReader): DataPeerListAnnounce;
}

export namespace DataPeerListAnnounce {
  export type AsObject = {
    peerListList: Array<DataPeer.AsObject>,
  }
}

export class DataPeer extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): DataPeer;

  getMultiaddr(): string;
  setMultiaddr(value: string): DataPeer;

  getMaxFrame(): number;
  setMaxFrame(value: number): DataPeer;

  getTimestamp(): number;
  setTimestamp(value: number): DataPeer;

  getVersion(): Uint8Array | string;
  getVersion_asU8(): Uint8Array;
  getVersion_asB64(): string;
  setVersion(value: Uint8Array | string): DataPeer;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): DataPeer;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): DataPeer;

  getTotalDistance(): Uint8Array | string;
  getTotalDistance_asU8(): Uint8Array;
  getTotalDistance_asB64(): string;
  setTotalDistance(value: Uint8Array | string): DataPeer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPeer.AsObject;
  static toObject(includeInstance: boolean, msg: DataPeer): DataPeer.AsObject;
  static serializeBinaryToWriter(message: DataPeer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPeer;
  static deserializeBinaryFromReader(message: DataPeer, reader: jspb.BinaryReader): DataPeer;
}

export namespace DataPeer {
  export type AsObject = {
    peerId: Uint8Array | string,
    multiaddr: string,
    maxFrame: number,
    timestamp: number,
    version: Uint8Array | string,
    signature: Uint8Array | string,
    publicKey: Uint8Array | string,
    totalDistance: Uint8Array | string,
  }
}

export class DataCompressedSync extends jspb.Message {
  getFromFrameNumber(): number;
  setFromFrameNumber(value: number): DataCompressedSync;

  getToFrameNumber(): number;
  setToFrameNumber(value: number): DataCompressedSync;

  getTruncatedClockFramesList(): Array<clock_pb.ClockFrame>;
  setTruncatedClockFramesList(value: Array<clock_pb.ClockFrame>): DataCompressedSync;
  clearTruncatedClockFramesList(): DataCompressedSync;
  addTruncatedClockFrames(value?: clock_pb.ClockFrame, index?: number): clock_pb.ClockFrame;

  getProofsList(): Array<InclusionProofsMap>;
  setProofsList(value: Array<InclusionProofsMap>): DataCompressedSync;
  clearProofsList(): DataCompressedSync;
  addProofs(value?: InclusionProofsMap, index?: number): InclusionProofsMap;

  getSegmentsList(): Array<InclusionSegmentsMap>;
  setSegmentsList(value: Array<InclusionSegmentsMap>): DataCompressedSync;
  clearSegmentsList(): DataCompressedSync;
  addSegments(value?: InclusionSegmentsMap, index?: number): InclusionSegmentsMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCompressedSync.AsObject;
  static toObject(includeInstance: boolean, msg: DataCompressedSync): DataCompressedSync.AsObject;
  static serializeBinaryToWriter(message: DataCompressedSync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCompressedSync;
  static deserializeBinaryFromReader(message: DataCompressedSync, reader: jspb.BinaryReader): DataCompressedSync;
}

export namespace DataCompressedSync {
  export type AsObject = {
    fromFrameNumber: number,
    toFrameNumber: number,
    truncatedClockFramesList: Array<clock_pb.ClockFrame.AsObject>,
    proofsList: Array<InclusionProofsMap.AsObject>,
    segmentsList: Array<InclusionSegmentsMap.AsObject>,
  }
}

export class SyncRequestAuthentication extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): SyncRequestAuthentication;

  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): SyncRequestAuthentication;

  getResponse(): keys_pb.Ed448Signature | undefined;
  setResponse(value?: keys_pb.Ed448Signature): SyncRequestAuthentication;
  hasResponse(): boolean;
  clearResponse(): SyncRequestAuthentication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequestAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequestAuthentication): SyncRequestAuthentication.AsObject;
  static serializeBinaryToWriter(message: SyncRequestAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequestAuthentication;
  static deserializeBinaryFromReader(message: SyncRequestAuthentication, reader: jspb.BinaryReader): SyncRequestAuthentication;
}

export namespace SyncRequestAuthentication {
  export type AsObject = {
    peerId: Uint8Array | string,
    challenge: Uint8Array | string,
    response?: keys_pb.Ed448Signature.AsObject,
  }
}

export class DataCompressedSyncRequestMessage extends jspb.Message {
  getPreflight(): clock_pb.ClockFramesPreflight | undefined;
  setPreflight(value?: clock_pb.ClockFramesPreflight): DataCompressedSyncRequestMessage;
  hasPreflight(): boolean;
  clearPreflight(): DataCompressedSyncRequestMessage;

  getRequest(): clock_pb.ClockFramesRequest | undefined;
  setRequest(value?: clock_pb.ClockFramesRequest): DataCompressedSyncRequestMessage;
  hasRequest(): boolean;
  clearRequest(): DataCompressedSyncRequestMessage;

  getAuthentication(): SyncRequestAuthentication | undefined;
  setAuthentication(value?: SyncRequestAuthentication): DataCompressedSyncRequestMessage;
  hasAuthentication(): boolean;
  clearAuthentication(): DataCompressedSyncRequestMessage;

  getSyncMessageCase(): DataCompressedSyncRequestMessage.SyncMessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCompressedSyncRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DataCompressedSyncRequestMessage): DataCompressedSyncRequestMessage.AsObject;
  static serializeBinaryToWriter(message: DataCompressedSyncRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCompressedSyncRequestMessage;
  static deserializeBinaryFromReader(message: DataCompressedSyncRequestMessage, reader: jspb.BinaryReader): DataCompressedSyncRequestMessage;
}

export namespace DataCompressedSyncRequestMessage {
  export type AsObject = {
    preflight?: clock_pb.ClockFramesPreflight.AsObject,
    request?: clock_pb.ClockFramesRequest.AsObject,
    authentication?: SyncRequestAuthentication.AsObject,
  }

  export enum SyncMessageCase { 
    SYNC_MESSAGE_NOT_SET = 0,
    PREFLIGHT = 1,
    REQUEST = 2,
    AUTHENTICATION = 3,
  }
}

export class DataCompressedSyncResponseMessage extends jspb.Message {
  getPreflight(): clock_pb.ClockFramesPreflight | undefined;
  setPreflight(value?: clock_pb.ClockFramesPreflight): DataCompressedSyncResponseMessage;
  hasPreflight(): boolean;
  clearPreflight(): DataCompressedSyncResponseMessage;

  getResponse(): DataCompressedSync | undefined;
  setResponse(value?: DataCompressedSync): DataCompressedSyncResponseMessage;
  hasResponse(): boolean;
  clearResponse(): DataCompressedSyncResponseMessage;

  getSyncMessageCase(): DataCompressedSyncResponseMessage.SyncMessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCompressedSyncResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DataCompressedSyncResponseMessage): DataCompressedSyncResponseMessage.AsObject;
  static serializeBinaryToWriter(message: DataCompressedSyncResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCompressedSyncResponseMessage;
  static deserializeBinaryFromReader(message: DataCompressedSyncResponseMessage, reader: jspb.BinaryReader): DataCompressedSyncResponseMessage;
}

export namespace DataCompressedSyncResponseMessage {
  export type AsObject = {
    preflight?: clock_pb.ClockFramesPreflight.AsObject,
    response?: DataCompressedSync.AsObject,
  }

  export enum SyncMessageCase { 
    SYNC_MESSAGE_NOT_SET = 0,
    PREFLIGHT = 1,
    RESPONSE = 2,
  }
}

export class InclusionProofsMap extends jspb.Message {
  getFrameCommit(): Uint8Array | string;
  getFrameCommit_asU8(): Uint8Array;
  getFrameCommit_asB64(): string;
  setFrameCommit(value: Uint8Array | string): InclusionProofsMap;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): InclusionProofsMap;

  getCommitmentsList(): Array<InclusionCommitmentsMap>;
  setCommitmentsList(value: Array<InclusionCommitmentsMap>): InclusionProofsMap;
  clearCommitmentsList(): InclusionProofsMap;
  addCommitments(value?: InclusionCommitmentsMap, index?: number): InclusionCommitmentsMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusionProofsMap.AsObject;
  static toObject(includeInstance: boolean, msg: InclusionProofsMap): InclusionProofsMap.AsObject;
  static serializeBinaryToWriter(message: InclusionProofsMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusionProofsMap;
  static deserializeBinaryFromReader(message: InclusionProofsMap, reader: jspb.BinaryReader): InclusionProofsMap;
}

export namespace InclusionProofsMap {
  export type AsObject = {
    frameCommit: Uint8Array | string,
    proof: Uint8Array | string,
    commitmentsList: Array<InclusionCommitmentsMap.AsObject>,
  }
}

export class InclusionSegmentsMap extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): InclusionSegmentsMap;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): InclusionSegmentsMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusionSegmentsMap.AsObject;
  static toObject(includeInstance: boolean, msg: InclusionSegmentsMap): InclusionSegmentsMap.AsObject;
  static serializeBinaryToWriter(message: InclusionSegmentsMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusionSegmentsMap;
  static deserializeBinaryFromReader(message: InclusionSegmentsMap, reader: jspb.BinaryReader): InclusionSegmentsMap;
}

export namespace InclusionSegmentsMap {
  export type AsObject = {
    hash: Uint8Array | string,
    data: Uint8Array | string,
  }
}

export class InclusionCommitmentsMap extends jspb.Message {
  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): InclusionCommitmentsMap;

  getTypeUrl(): string;
  setTypeUrl(value: string): InclusionCommitmentsMap;

  getSegmentHashesList(): Array<Uint8Array | string>;
  setSegmentHashesList(value: Array<Uint8Array | string>): InclusionCommitmentsMap;
  clearSegmentHashesList(): InclusionCommitmentsMap;
  addSegmentHashes(value: Uint8Array | string, index?: number): InclusionCommitmentsMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusionCommitmentsMap.AsObject;
  static toObject(includeInstance: boolean, msg: InclusionCommitmentsMap): InclusionCommitmentsMap.AsObject;
  static serializeBinaryToWriter(message: InclusionCommitmentsMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusionCommitmentsMap;
  static deserializeBinaryFromReader(message: InclusionCommitmentsMap, reader: jspb.BinaryReader): InclusionCommitmentsMap;
}

export namespace InclusionCommitmentsMap {
  export type AsObject = {
    commitment: Uint8Array | string,
    typeUrl: string,
    segmentHashesList: Array<Uint8Array | string>,
  }
}

export class GetDataFrameRequest extends jspb.Message {
  getFrameNumber(): number;
  setFrameNumber(value: number): GetDataFrameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataFrameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataFrameRequest): GetDataFrameRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataFrameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataFrameRequest;
  static deserializeBinaryFromReader(message: GetDataFrameRequest, reader: jspb.BinaryReader): GetDataFrameRequest;
}

export namespace GetDataFrameRequest {
  export type AsObject = {
    frameNumber: number,
  }
}

export class DataFrameResponse extends jspb.Message {
  getClockFrame(): clock_pb.ClockFrame | undefined;
  setClockFrame(value?: clock_pb.ClockFrame): DataFrameResponse;
  hasClockFrame(): boolean;
  clearClockFrame(): DataFrameResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): DataFrameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataFrameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DataFrameResponse): DataFrameResponse.AsObject;
  static serializeBinaryToWriter(message: DataFrameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataFrameResponse;
  static deserializeBinaryFromReader(message: DataFrameResponse, reader: jspb.BinaryReader): DataFrameResponse;
}

export namespace DataFrameResponse {
  export type AsObject = {
    clockFrame?: clock_pb.ClockFrame.AsObject,
    proof: Uint8Array | string,
  }
}

export class PreMidnightMintResponse extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): PreMidnightMintResponse;

  getIncrement(): number;
  setIncrement(value: number): PreMidnightMintResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreMidnightMintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreMidnightMintResponse): PreMidnightMintResponse.AsObject;
  static serializeBinaryToWriter(message: PreMidnightMintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreMidnightMintResponse;
  static deserializeBinaryFromReader(message: PreMidnightMintResponse, reader: jspb.BinaryReader): PreMidnightMintResponse;
}

export namespace PreMidnightMintResponse {
  export type AsObject = {
    address: Uint8Array | string,
    increment: number,
  }
}

export class PreMidnightMintStatusRequest extends jspb.Message {
  getOwner(): Uint8Array | string;
  getOwner_asU8(): Uint8Array;
  getOwner_asB64(): string;
  setOwner(value: Uint8Array | string): PreMidnightMintStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreMidnightMintStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreMidnightMintStatusRequest): PreMidnightMintStatusRequest.AsObject;
  static serializeBinaryToWriter(message: PreMidnightMintStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreMidnightMintStatusRequest;
  static deserializeBinaryFromReader(message: PreMidnightMintStatusRequest, reader: jspb.BinaryReader): PreMidnightMintStatusRequest;
}

export namespace PreMidnightMintStatusRequest {
  export type AsObject = {
    owner: Uint8Array | string,
  }
}

export class FrameRebroadcast extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): FrameRebroadcast;

  getTo(): number;
  setTo(value: number): FrameRebroadcast;

  getClockFramesList(): Array<clock_pb.ClockFrame>;
  setClockFramesList(value: Array<clock_pb.ClockFrame>): FrameRebroadcast;
  clearClockFramesList(): FrameRebroadcast;
  addClockFrames(value?: clock_pb.ClockFrame, index?: number): clock_pb.ClockFrame;

  getRandom(): Uint8Array | string;
  getRandom_asU8(): Uint8Array;
  getRandom_asB64(): string;
  setRandom(value: Uint8Array | string): FrameRebroadcast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameRebroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: FrameRebroadcast): FrameRebroadcast.AsObject;
  static serializeBinaryToWriter(message: FrameRebroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameRebroadcast;
  static deserializeBinaryFromReader(message: FrameRebroadcast, reader: jspb.BinaryReader): FrameRebroadcast;
}

export namespace FrameRebroadcast {
  export type AsObject = {
    from: number,
    to: number,
    clockFramesList: Array<clock_pb.ClockFrame.AsObject>,
    random: Uint8Array | string,
  }
}

export class ChallengeProofRequest extends jspb.Message {
  getPeerId(): Uint8Array | string;
  getPeerId_asU8(): Uint8Array;
  getPeerId_asB64(): string;
  setPeerId(value: Uint8Array | string): ChallengeProofRequest;

  getClockFrame(): clock_pb.ClockFrame | undefined;
  setClockFrame(value?: clock_pb.ClockFrame): ChallengeProofRequest;
  hasClockFrame(): boolean;
  clearClockFrame(): ChallengeProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChallengeProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChallengeProofRequest): ChallengeProofRequest.AsObject;
  static serializeBinaryToWriter(message: ChallengeProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChallengeProofRequest;
  static deserializeBinaryFromReader(message: ChallengeProofRequest, reader: jspb.BinaryReader): ChallengeProofRequest;
}

export namespace ChallengeProofRequest {
  export type AsObject = {
    peerId: Uint8Array | string,
    clockFrame?: clock_pb.ClockFrame.AsObject,
  }
}

export class ChallengeProofResponse extends jspb.Message {
  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): ChallengeProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChallengeProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChallengeProofResponse): ChallengeProofResponse.AsObject;
  static serializeBinaryToWriter(message: ChallengeProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChallengeProofResponse;
  static deserializeBinaryFromReader(message: ChallengeProofResponse, reader: jspb.BinaryReader): ChallengeProofResponse;
}

export namespace ChallengeProofResponse {
  export type AsObject = {
    output: Uint8Array | string,
  }
}

