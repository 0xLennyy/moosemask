import * as jspb from 'google-protobuf'



export class PublicKey extends jspb.Message {
  getType(): KeyType;
  setType(value: KeyType): PublicKey;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    type: KeyType,
    data: Uint8Array | string,
  }
}

export class PrivateKey extends jspb.Message {
  getType(): KeyType;
  setType(value: KeyType): PrivateKey;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PrivateKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateKey.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateKey): PrivateKey.AsObject;
  static serializeBinaryToWriter(message: PrivateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateKey;
  static deserializeBinaryFromReader(message: PrivateKey, reader: jspb.BinaryReader): PrivateKey;
}

export namespace PrivateKey {
  export type AsObject = {
    type: KeyType,
    data: Uint8Array | string,
  }
}

export enum KeyType { 
  RSA = 0,
  ED25519 = 1,
  SECP256K1 = 2,
  ECDSA = 3,
  ED448 = 4,
}
