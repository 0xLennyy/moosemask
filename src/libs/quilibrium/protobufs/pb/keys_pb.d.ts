import * as jspb from 'google-protobuf'



export class Ed448PublicKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): Ed448PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ed448PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: Ed448PublicKey): Ed448PublicKey.AsObject;
  static serializeBinaryToWriter(message: Ed448PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ed448PublicKey;
  static deserializeBinaryFromReader(message: Ed448PublicKey, reader: jspb.BinaryReader): Ed448PublicKey;
}

export namespace Ed448PublicKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
  }
}

export class Ed448PrivateKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): Ed448PrivateKey;

  getPublicKey(): Ed448PublicKey | undefined;
  setPublicKey(value?: Ed448PublicKey): Ed448PrivateKey;
  hasPublicKey(): boolean;
  clearPublicKey(): Ed448PrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ed448PrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: Ed448PrivateKey): Ed448PrivateKey.AsObject;
  static serializeBinaryToWriter(message: Ed448PrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ed448PrivateKey;
  static deserializeBinaryFromReader(message: Ed448PrivateKey, reader: jspb.BinaryReader): Ed448PrivateKey;
}

export namespace Ed448PrivateKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
    publicKey?: Ed448PublicKey.AsObject,
  }
}

export class Ed448Signature extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Ed448Signature;

  getPublicKey(): Ed448PublicKey | undefined;
  setPublicKey(value?: Ed448PublicKey): Ed448Signature;
  hasPublicKey(): boolean;
  clearPublicKey(): Ed448Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ed448Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Ed448Signature): Ed448Signature.AsObject;
  static serializeBinaryToWriter(message: Ed448Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ed448Signature;
  static deserializeBinaryFromReader(message: Ed448Signature, reader: jspb.BinaryReader): Ed448Signature;
}

export namespace Ed448Signature {
  export type AsObject = {
    signature: Uint8Array | string,
    publicKey?: Ed448PublicKey.AsObject,
  }
}

export class X448PublicKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): X448PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): X448PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: X448PublicKey): X448PublicKey.AsObject;
  static serializeBinaryToWriter(message: X448PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): X448PublicKey;
  static deserializeBinaryFromReader(message: X448PublicKey, reader: jspb.BinaryReader): X448PublicKey;
}

export namespace X448PublicKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
  }
}

export class X448PrivateKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): X448PrivateKey;

  getPublicKey(): X448PublicKey | undefined;
  setPublicKey(value?: X448PublicKey): X448PrivateKey;
  hasPublicKey(): boolean;
  clearPublicKey(): X448PrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): X448PrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: X448PrivateKey): X448PrivateKey.AsObject;
  static serializeBinaryToWriter(message: X448PrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): X448PrivateKey;
  static deserializeBinaryFromReader(message: X448PrivateKey, reader: jspb.BinaryReader): X448PrivateKey;
}

export namespace X448PrivateKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
    publicKey?: X448PublicKey.AsObject,
  }
}

export class PCASPublicKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): PCASPublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PCASPublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PCASPublicKey): PCASPublicKey.AsObject;
  static serializeBinaryToWriter(message: PCASPublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PCASPublicKey;
  static deserializeBinaryFromReader(message: PCASPublicKey, reader: jspb.BinaryReader): PCASPublicKey;
}

export namespace PCASPublicKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
  }
}

export class PCASPrivateKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): PCASPrivateKey;

  getPublicKey(): PCASPublicKey | undefined;
  setPublicKey(value?: PCASPublicKey): PCASPrivateKey;
  hasPublicKey(): boolean;
  clearPublicKey(): PCASPrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PCASPrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: PCASPrivateKey): PCASPrivateKey.AsObject;
  static serializeBinaryToWriter(message: PCASPrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PCASPrivateKey;
  static deserializeBinaryFromReader(message: PCASPrivateKey, reader: jspb.BinaryReader): PCASPrivateKey;
}

export namespace PCASPrivateKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
    publicKey?: PCASPublicKey.AsObject,
  }
}

export class BLS48581G1PublicKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): BLS48581G1PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLS48581G1PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: BLS48581G1PublicKey): BLS48581G1PublicKey.AsObject;
  static serializeBinaryToWriter(message: BLS48581G1PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLS48581G1PublicKey;
  static deserializeBinaryFromReader(message: BLS48581G1PublicKey, reader: jspb.BinaryReader): BLS48581G1PublicKey;
}

export namespace BLS48581G1PublicKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
  }
}

export class BLS48581G1PrivateKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): BLS48581G1PrivateKey;

  getPublicKey(): BLS48581G1PublicKey | undefined;
  setPublicKey(value?: BLS48581G1PublicKey): BLS48581G1PrivateKey;
  hasPublicKey(): boolean;
  clearPublicKey(): BLS48581G1PrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLS48581G1PrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: BLS48581G1PrivateKey): BLS48581G1PrivateKey.AsObject;
  static serializeBinaryToWriter(message: BLS48581G1PrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLS48581G1PrivateKey;
  static deserializeBinaryFromReader(message: BLS48581G1PrivateKey, reader: jspb.BinaryReader): BLS48581G1PrivateKey;
}

export namespace BLS48581G1PrivateKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
    publicKey?: BLS48581G1PublicKey.AsObject,
  }
}

export class BLS48581G2PublicKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): BLS48581G2PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLS48581G2PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: BLS48581G2PublicKey): BLS48581G2PublicKey.AsObject;
  static serializeBinaryToWriter(message: BLS48581G2PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLS48581G2PublicKey;
  static deserializeBinaryFromReader(message: BLS48581G2PublicKey, reader: jspb.BinaryReader): BLS48581G2PublicKey;
}

export namespace BLS48581G2PublicKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
  }
}

export class BLS48581G2PrivateKey extends jspb.Message {
  getKeyValue(): Uint8Array | string;
  getKeyValue_asU8(): Uint8Array;
  getKeyValue_asB64(): string;
  setKeyValue(value: Uint8Array | string): BLS48581G2PrivateKey;

  getPublicKey(): BLS48581G2PublicKey | undefined;
  setPublicKey(value?: BLS48581G2PublicKey): BLS48581G2PrivateKey;
  hasPublicKey(): boolean;
  clearPublicKey(): BLS48581G2PrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLS48581G2PrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: BLS48581G2PrivateKey): BLS48581G2PrivateKey.AsObject;
  static serializeBinaryToWriter(message: BLS48581G2PrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLS48581G2PrivateKey;
  static deserializeBinaryFromReader(message: BLS48581G2PrivateKey, reader: jspb.BinaryReader): BLS48581G2PrivateKey;
}

export namespace BLS48581G2PrivateKey {
  export type AsObject = {
    keyValue: Uint8Array | string,
    publicKey?: BLS48581G2PublicKey.AsObject,
  }
}

export class BLS48581Signature extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): BLS48581Signature;

  getPublicKey(): BLS48581G2PublicKey | undefined;
  setPublicKey(value?: BLS48581G2PublicKey): BLS48581Signature;
  hasPublicKey(): boolean;
  clearPublicKey(): BLS48581Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLS48581Signature.AsObject;
  static toObject(includeInstance: boolean, msg: BLS48581Signature): BLS48581Signature.AsObject;
  static serializeBinaryToWriter(message: BLS48581Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLS48581Signature;
  static deserializeBinaryFromReader(message: BLS48581Signature, reader: jspb.BinaryReader): BLS48581Signature;
}

export namespace BLS48581Signature {
  export type AsObject = {
    signature: Uint8Array | string,
    publicKey?: BLS48581G2PublicKey.AsObject,
  }
}

