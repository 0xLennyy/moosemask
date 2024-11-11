import * as jspb from 'google-protobuf'



export class Application extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): Application;

  getExecutionContext(): ExecutionContext;
  setExecutionContext(value: ExecutionContext): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    address: Uint8Array | string,
    executionContext: ExecutionContext,
  }
}

export class IntrinsicExecutionInput extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): IntrinsicExecutionInput;

  getInput(): Uint8Array | string;
  getInput_asU8(): Uint8Array;
  getInput_asB64(): string;
  setInput(value: Uint8Array | string): IntrinsicExecutionInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntrinsicExecutionInput.AsObject;
  static toObject(includeInstance: boolean, msg: IntrinsicExecutionInput): IntrinsicExecutionInput.AsObject;
  static serializeBinaryToWriter(message: IntrinsicExecutionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntrinsicExecutionInput;
  static deserializeBinaryFromReader(message: IntrinsicExecutionInput, reader: jspb.BinaryReader): IntrinsicExecutionInput;
}

export namespace IntrinsicExecutionInput {
  export type AsObject = {
    address: Uint8Array | string,
    input: Uint8Array | string,
  }
}

export class IntrinsicExecutionOutput extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): IntrinsicExecutionOutput;

  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): IntrinsicExecutionOutput;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): IntrinsicExecutionOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntrinsicExecutionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: IntrinsicExecutionOutput): IntrinsicExecutionOutput.AsObject;
  static serializeBinaryToWriter(message: IntrinsicExecutionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntrinsicExecutionOutput;
  static deserializeBinaryFromReader(message: IntrinsicExecutionOutput, reader: jspb.BinaryReader): IntrinsicExecutionOutput;
}

export namespace IntrinsicExecutionOutput {
  export type AsObject = {
    address: Uint8Array | string,
    output: Uint8Array | string,
    proof: Uint8Array | string,
  }
}

export class Message extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): Message;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): Message;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    hash: Uint8Array | string,
    address: Uint8Array | string,
    payload: Uint8Array | string,
  }
}

export enum ExecutionContext { 
  EXECUTION_CONTEXT_INTRINSIC = 0,
  EXECUTION_CONTEXT_HYPERGRAPH = 1,
  EXECUTION_CONTEXT_EXTRINSIC = 2,
}
