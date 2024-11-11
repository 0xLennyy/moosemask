import * as jspb from 'google-protobuf'

import * as keys_pb from './keys_pb'; // proto import: "keys.proto"


export class P2PChannelEnvelope extends jspb.Message {
  getProtocolIdentifier(): number;
  setProtocolIdentifier(value: number): P2PChannelEnvelope;

  getMessageHeader(): MessageCiphertext | undefined;
  setMessageHeader(value?: MessageCiphertext): P2PChannelEnvelope;
  hasMessageHeader(): boolean;
  clearMessageHeader(): P2PChannelEnvelope;

  getMessageBody(): MessageCiphertext | undefined;
  setMessageBody(value?: MessageCiphertext): P2PChannelEnvelope;
  hasMessageBody(): boolean;
  clearMessageBody(): P2PChannelEnvelope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P2PChannelEnvelope.AsObject;
  static toObject(includeInstance: boolean, msg: P2PChannelEnvelope): P2PChannelEnvelope.AsObject;
  static serializeBinaryToWriter(message: P2PChannelEnvelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P2PChannelEnvelope;
  static deserializeBinaryFromReader(message: P2PChannelEnvelope, reader: jspb.BinaryReader): P2PChannelEnvelope;
}

export namespace P2PChannelEnvelope {
  export type AsObject = {
    protocolIdentifier: number,
    messageHeader?: MessageCiphertext.AsObject,
    messageBody?: MessageCiphertext.AsObject,
  }
}

export class MessageCiphertext extends jspb.Message {
  getInitializationVector(): Uint8Array | string;
  getInitializationVector_asU8(): Uint8Array;
  getInitializationVector_asB64(): string;
  setInitializationVector(value: Uint8Array | string): MessageCiphertext;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): MessageCiphertext;

  getAssociatedData(): Uint8Array | string;
  getAssociatedData_asU8(): Uint8Array;
  getAssociatedData_asB64(): string;
  setAssociatedData(value: Uint8Array | string): MessageCiphertext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageCiphertext.AsObject;
  static toObject(includeInstance: boolean, msg: MessageCiphertext): MessageCiphertext.AsObject;
  static serializeBinaryToWriter(message: MessageCiphertext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageCiphertext;
  static deserializeBinaryFromReader(message: MessageCiphertext, reader: jspb.BinaryReader): MessageCiphertext;
}

export namespace MessageCiphertext {
  export type AsObject = {
    initializationVector: Uint8Array | string,
    ciphertext: Uint8Array | string,
    associatedData: Uint8Array | string,
  }
}

export class ProvingKeyAnnouncement extends jspb.Message {
  getIdentityCommitment(): Uint8Array | string;
  getIdentityCommitment_asU8(): Uint8Array;
  getIdentityCommitment_asB64(): string;
  setIdentityCommitment(value: Uint8Array | string): ProvingKeyAnnouncement;

  getPrekeyCommitment(): Uint8Array | string;
  getPrekeyCommitment_asU8(): Uint8Array;
  getPrekeyCommitment_asB64(): string;
  setPrekeyCommitment(value: Uint8Array | string): ProvingKeyAnnouncement;

  getProvingKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setProvingKeySignatureEd448(value?: keys_pb.Ed448Signature): ProvingKeyAnnouncement;
  hasProvingKeySignatureEd448(): boolean;
  clearProvingKeySignatureEd448(): ProvingKeyAnnouncement;

  getProvingKeySignatureCase(): ProvingKeyAnnouncement.ProvingKeySignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvingKeyAnnouncement.AsObject;
  static toObject(includeInstance: boolean, msg: ProvingKeyAnnouncement): ProvingKeyAnnouncement.AsObject;
  static serializeBinaryToWriter(message: ProvingKeyAnnouncement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvingKeyAnnouncement;
  static deserializeBinaryFromReader(message: ProvingKeyAnnouncement, reader: jspb.BinaryReader): ProvingKeyAnnouncement;
}

export namespace ProvingKeyAnnouncement {
  export type AsObject = {
    identityCommitment: Uint8Array | string,
    prekeyCommitment: Uint8Array | string,
    provingKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }

  export enum ProvingKeySignatureCase { 
    PROVING_KEY_SIGNATURE_NOT_SET = 0,
    PROVING_KEY_SIGNATURE_ED448 = 3,
  }
}

export class ProvingKeyRequest extends jspb.Message {
  getProvingKeyBytes(): Uint8Array | string;
  getProvingKeyBytes_asU8(): Uint8Array;
  getProvingKeyBytes_asB64(): string;
  setProvingKeyBytes(value: Uint8Array | string): ProvingKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvingKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProvingKeyRequest): ProvingKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ProvingKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvingKeyRequest;
  static deserializeBinaryFromReader(message: ProvingKeyRequest, reader: jspb.BinaryReader): ProvingKeyRequest;
}

export namespace ProvingKeyRequest {
  export type AsObject = {
    provingKeyBytes: Uint8Array | string,
  }
}

export class InclusionAggregateProof extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): InclusionAggregateProof;

  getFrameNumber(): number;
  setFrameNumber(value: number): InclusionAggregateProof;

  getInclusionCommitmentsList(): Array<InclusionCommitment>;
  setInclusionCommitmentsList(value: Array<InclusionCommitment>): InclusionAggregateProof;
  clearInclusionCommitmentsList(): InclusionAggregateProof;
  addInclusionCommitments(value?: InclusionCommitment, index?: number): InclusionCommitment;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): InclusionAggregateProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusionAggregateProof.AsObject;
  static toObject(includeInstance: boolean, msg: InclusionAggregateProof): InclusionAggregateProof.AsObject;
  static serializeBinaryToWriter(message: InclusionAggregateProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusionAggregateProof;
  static deserializeBinaryFromReader(message: InclusionAggregateProof, reader: jspb.BinaryReader): InclusionAggregateProof;
}

export namespace InclusionAggregateProof {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    inclusionCommitmentsList: Array<InclusionCommitment.AsObject>,
    proof: Uint8Array | string,
  }
}

export class InclusionCommitment extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): InclusionCommitment;

  getFrameNumber(): number;
  setFrameNumber(value: number): InclusionCommitment;

  getPosition(): number;
  setPosition(value: number): InclusionCommitment;

  getTypeUrl(): string;
  setTypeUrl(value: string): InclusionCommitment;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): InclusionCommitment;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): InclusionCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusionCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: InclusionCommitment): InclusionCommitment.AsObject;
  static serializeBinaryToWriter(message: InclusionCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusionCommitment;
  static deserializeBinaryFromReader(message: InclusionCommitment, reader: jspb.BinaryReader): InclusionCommitment;
}

export namespace InclusionCommitment {
  export type AsObject = {
    filter: Uint8Array | string,
    frameNumber: number,
    position: number,
    typeUrl: string,
    data: Uint8Array | string,
    commitment: Uint8Array | string,
  }
}

export class KeyBundleAnnouncement extends jspb.Message {
  getIdentityKey(): IdentityKey | undefined;
  setIdentityKey(value?: IdentityKey): KeyBundleAnnouncement;
  hasIdentityKey(): boolean;
  clearIdentityKey(): KeyBundleAnnouncement;

  getSignedPreKey(): SignedPreKey | undefined;
  setSignedPreKey(value?: SignedPreKey): KeyBundleAnnouncement;
  hasSignedPreKey(): boolean;
  clearSignedPreKey(): KeyBundleAnnouncement;

  getProvingKeyBytes(): Uint8Array | string;
  getProvingKeyBytes_asU8(): Uint8Array;
  getProvingKeyBytes_asB64(): string;
  setProvingKeyBytes(value: Uint8Array | string): KeyBundleAnnouncement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyBundleAnnouncement.AsObject;
  static toObject(includeInstance: boolean, msg: KeyBundleAnnouncement): KeyBundleAnnouncement.AsObject;
  static serializeBinaryToWriter(message: KeyBundleAnnouncement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyBundleAnnouncement;
  static deserializeBinaryFromReader(message: KeyBundleAnnouncement, reader: jspb.BinaryReader): KeyBundleAnnouncement;
}

export namespace KeyBundleAnnouncement {
  export type AsObject = {
    identityKey?: IdentityKey.AsObject,
    signedPreKey?: SignedPreKey.AsObject,
    provingKeyBytes: Uint8Array | string,
  }
}

export class IdentityKey extends jspb.Message {
  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): IdentityKey;

  getResponse(): Uint8Array | string;
  getResponse_asU8(): Uint8Array;
  getResponse_asB64(): string;
  setResponse(value: Uint8Array | string): IdentityKey;

  getStatement(): Uint8Array | string;
  getStatement_asU8(): Uint8Array;
  getStatement_asB64(): string;
  setStatement(value: Uint8Array | string): IdentityKey;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): IdentityKey;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): IdentityKey;

  getIdentityKeySignatureCase(): IdentityKey.IdentityKeySignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityKey.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityKey): IdentityKey.AsObject;
  static serializeBinaryToWriter(message: IdentityKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityKey;
  static deserializeBinaryFromReader(message: IdentityKey, reader: jspb.BinaryReader): IdentityKey;
}

export namespace IdentityKey {
  export type AsObject = {
    challenge: Uint8Array | string,
    response: Uint8Array | string,
    statement: Uint8Array | string,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }

  export enum IdentityKeySignatureCase { 
    IDENTITY_KEY_SIGNATURE_NOT_SET = 0,
    PUBLIC_KEY_SIGNATURE_ED448 = 4,
  }
}

export class SignedPreKey extends jspb.Message {
  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): SignedPreKey;

  getResponse(): Uint8Array | string;
  getResponse_asU8(): Uint8Array;
  getResponse_asB64(): string;
  setResponse(value: Uint8Array | string): SignedPreKey;

  getStatement(): Uint8Array | string;
  getStatement_asU8(): Uint8Array;
  getStatement_asB64(): string;
  setStatement(value: Uint8Array | string): SignedPreKey;

  getPublicKeySignatureEd448(): keys_pb.Ed448Signature | undefined;
  setPublicKeySignatureEd448(value?: keys_pb.Ed448Signature): SignedPreKey;
  hasPublicKeySignatureEd448(): boolean;
  clearPublicKeySignatureEd448(): SignedPreKey;

  getSignedPreKeySignatureCase(): SignedPreKey.SignedPreKeySignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedPreKey.AsObject;
  static toObject(includeInstance: boolean, msg: SignedPreKey): SignedPreKey.AsObject;
  static serializeBinaryToWriter(message: SignedPreKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedPreKey;
  static deserializeBinaryFromReader(message: SignedPreKey, reader: jspb.BinaryReader): SignedPreKey;
}

export namespace SignedPreKey {
  export type AsObject = {
    challenge: Uint8Array | string,
    response: Uint8Array | string,
    statement: Uint8Array | string,
    publicKeySignatureEd448?: keys_pb.Ed448Signature.AsObject,
  }

  export enum SignedPreKeySignatureCase { 
    SIGNED_PRE_KEY_SIGNATURE_NOT_SET = 0,
    PUBLIC_KEY_SIGNATURE_ED448 = 4,
  }
}

