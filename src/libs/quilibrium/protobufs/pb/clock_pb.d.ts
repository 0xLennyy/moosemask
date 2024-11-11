import * as jspb from 'google-protobuf'

import * as channel_pb from './channel_pb'; // proto import: "channel.proto"
import * as keys_pb from './keys_pb'; // proto import: "keys.proto"


export class ClockFrame extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): ClockFrame;

  getFrameNumber(): number;
  setFrameNumber(value: number): ClockFrame;

  getTimestamp(): number;
  setTimestamp(value: number): ClockFrame;

  getDifficulty(): number;
  setDifficulty(value: number): ClockFrame;

  getParentSelector(): Uint8Array | string;
  getParentSelector_asU8(): Uint8Array;
  getParentSelector_asB64(): string;
  setParentSelector(value: Uint8Array | string): ClockFrame;

  getInput(): Uint8Array | string;
  getInput_asU8(): Uint8Array;
  getInput_asB64(): string;
  setInput(value: Uint8Array | string): ClockFrame;

  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): ClockFrame;

  getAggregateProofsList(): Array<channel_pb.InclusionAggregateProof>;
  setAggregateProofsList(value: Array<channel_pb.InclusionAggregateProof>): ClockFrame;
  clearAggregateProofsList(): ClockFrame;
  addAggregateProofs(value?: channel_pb.InclusionAggregateProof, index?: number): channel_pb.InclusionAggregateProof;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): ClockFrame;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): ClockFrame;

  getPublicKeySignatureCase(): ClockFrame.PublicKeySignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClockFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ClockFrame): ClockFrame.AsObject;
  static serializeBinaryToWriter(message: ClockFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClockFrame;
  static deserializeBinaryFromReader(message: ClockFrame, reader: jspb.BinaryReader): ClockFrame;
}

export namespace ClockFrame {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    timestamp: number,
    difficulty: number,
    parentSelector: Uint8Array | string,
    input: Uint8Array | string,
    output: Uint8Array | string,
    aggregateProofsList: Array<channel_pb.InclusionAggregateProof.AsObject>,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }

  export enum PublicKeySignatureCase { 
    PUBLIC_KEY_SIGNATURE_NOT_SET = 0,
    PUBLIC_KEY_SIGNATURE_ED448 = 9,
  }
}

export class ClockFrameParentSelectors extends jspb.Message {
  getFrameNumber(): number;
  setFrameNumber(value: number): ClockFrameParentSelectors;

  getParentSelector(): Uint8Array | string;
  getParentSelector_asU8(): Uint8Array;
  getParentSelector_asB64(): string;
  setParentSelector(value: Uint8Array | string): ClockFrameParentSelectors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClockFrameParentSelectors.AsObject;
  static toObject(includeInstance: boolean, msg: ClockFrameParentSelectors): ClockFrameParentSelectors.AsObject;
  static serializeBinaryToWriter(message: ClockFrameParentSelectors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClockFrameParentSelectors;
  static deserializeBinaryFromReader(message: ClockFrameParentSelectors, reader: jspb.BinaryReader): ClockFrameParentSelectors;
}

export namespace ClockFrameParentSelectors {
  export type AsObject = {
    frameNumber: number,
    parentSelector: Uint8Array | string,
  }
}

export class ClockFramesRequest extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): ClockFramesRequest;

  getFromFrameNumber(): number;
  setFromFrameNumber(value: number): ClockFramesRequest;

  getToFrameNumber(): number;
  setToFrameNumber(value: number): ClockFramesRequest;

  getParentSelector(): Uint8Array | string;
  getParentSelector_asU8(): Uint8Array;
  getParentSelector_asB64(): string;
  setParentSelector(value: Uint8Array | string): ClockFramesRequest;

  getRangeParentSelectorsList(): Array<ClockFrameParentSelectors>;
  setRangeParentSelectorsList(value: Array<ClockFrameParentSelectors>): ClockFramesRequest;
  clearRangeParentSelectorsList(): ClockFramesRequest;
  addRangeParentSelectors(value?: ClockFrameParentSelectors, index?: number): ClockFrameParentSelectors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClockFramesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClockFramesRequest): ClockFramesRequest.AsObject;
  static serializeBinaryToWriter(message: ClockFramesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClockFramesRequest;
  static deserializeBinaryFromReader(message: ClockFramesRequest, reader: jspb.BinaryReader): ClockFramesRequest;
}

export namespace ClockFramesRequest {
  export type AsObject = {
    filter: Uint8Array | string,
    fromFrameNumber: number,
    toFrameNumber: number,
    parentSelector: Uint8Array | string,
    rangeParentSelectorsList: Array<ClockFrameParentSelectors.AsObject>,
  }
}

export class ClockFramesPreflight extends jspb.Message {
  getRangeParentSelectorsList(): Array<ClockFrameParentSelectors>;
  setRangeParentSelectorsList(value: Array<ClockFrameParentSelectors>): ClockFramesPreflight;
  clearRangeParentSelectorsList(): ClockFramesPreflight;
  addRangeParentSelectors(value?: ClockFrameParentSelectors, index?: number): ClockFrameParentSelectors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClockFramesPreflight.AsObject;
  static toObject(includeInstance: boolean, msg: ClockFramesPreflight): ClockFramesPreflight.AsObject;
  static serializeBinaryToWriter(message: ClockFramesPreflight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClockFramesPreflight;
  static deserializeBinaryFromReader(message: ClockFramesPreflight, reader: jspb.BinaryReader): ClockFramesPreflight;
}

export namespace ClockFramesPreflight {
  export type AsObject = {
    rangeParentSelectorsList: Array<ClockFrameParentSelectors.AsObject>,
  }
}

export class ClockFramesResponse extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): ClockFramesResponse;

  getFromFrameNumber(): number;
  setFromFrameNumber(value: number): ClockFramesResponse;

  getToFrameNumber(): number;
  setToFrameNumber(value: number): ClockFramesResponse;

  getClockFramesList(): Array<ClockFrame>;
  setClockFramesList(value: Array<ClockFrame>): ClockFramesResponse;
  clearClockFramesList(): ClockFramesResponse;
  addClockFrames(value?: ClockFrame, index?: number): ClockFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClockFramesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClockFramesResponse): ClockFramesResponse.AsObject;
  static serializeBinaryToWriter(message: ClockFramesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClockFramesResponse;
  static deserializeBinaryFromReader(message: ClockFramesResponse, reader: jspb.BinaryReader): ClockFramesResponse;
}

export namespace ClockFramesResponse {
  export type AsObject = {
    filter: Uint8Array | string,
    fromFrameNumber: number,
    toFrameNumber: number,
    clockFramesList: Array<ClockFrame.AsObject>,
  }
}

