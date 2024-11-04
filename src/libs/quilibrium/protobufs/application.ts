// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.20.3
// source: application.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "quilibrium.node.application.pb";

/** The ExecutionContext defines the operating environment of the application */
export enum ExecutionContext {
  /**
   * EXECUTION_CONTEXT_INTRINSIC - Intrinsic execution is a protocol-native application – Nodes are expected
   * to have the necessary information required to execute.
   * Intrinsic applications have addresses that have infinitessimal likelihood
   * of collision and must be constructed as nothing-up-my-sleeve values.
   */
  EXECUTION_CONTEXT_INTRINSIC = 0,
  /**
   * EXECUTION_CONTEXT_HYPERGRAPH - Hypergraph execution is also protocol-native, however it can be chained
   * with extrinsic execution whereas other intrinsics cannot.
   * Hypergraph applications have addresses that are derived from location
   * within the hypergraph.
   */
  EXECUTION_CONTEXT_HYPERGRAPH = 1,
  /**
   * EXECUTION_CONTEXT_EXTRINSIC - Extrinsic execution is evaluation of application code that lives on the
   * protocol, either within the hypergraph or supplementary to it, e.g. MetaVM.
   */
  EXECUTION_CONTEXT_EXTRINSIC = 2,
  UNRECOGNIZED = -1,
}

export function executionContextFromJSON(object: any): ExecutionContext {
  switch (object) {
    case 0:
    case "EXECUTION_CONTEXT_INTRINSIC":
      return ExecutionContext.EXECUTION_CONTEXT_INTRINSIC;
    case 1:
    case "EXECUTION_CONTEXT_HYPERGRAPH":
      return ExecutionContext.EXECUTION_CONTEXT_HYPERGRAPH;
    case 2:
    case "EXECUTION_CONTEXT_EXTRINSIC":
      return ExecutionContext.EXECUTION_CONTEXT_EXTRINSIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionContext.UNRECOGNIZED;
  }
}

export function executionContextToJSON(object: ExecutionContext): string {
  switch (object) {
    case ExecutionContext.EXECUTION_CONTEXT_INTRINSIC:
      return "EXECUTION_CONTEXT_INTRINSIC";
    case ExecutionContext.EXECUTION_CONTEXT_HYPERGRAPH:
      return "EXECUTION_CONTEXT_HYPERGRAPH";
    case ExecutionContext.EXECUTION_CONTEXT_EXTRINSIC:
      return "EXECUTION_CONTEXT_EXTRINSIC";
    case ExecutionContext.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Application {
  address: Uint8Array;
  executionContext: ExecutionContext;
}

export interface IntrinsicExecutionInput {
  address: Uint8Array;
  input: Uint8Array;
}

export interface IntrinsicExecutionOutput {
  address: Uint8Array;
  output: Uint8Array;
  proof: Uint8Array;
}

export interface Message {
  hash: Uint8Array;
  address: Uint8Array;
  payload: Uint8Array;
}

function createBaseApplication(): Application {
  return { address: new Uint8Array(0), executionContext: 0 };
}

export const Application: MessageFns<Application> = {
  encode(message: Application, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.executionContext !== 0) {
      writer.uint32(16).int32(message.executionContext);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Application {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.executionContext = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Application {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      executionContext: isSet(object.executionContext) ? executionContextFromJSON(object.executionContext) : 0,
    };
  },

  toJSON(message: Application): unknown {
    const obj: any = {};
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.executionContext !== 0) {
      obj.executionContext = executionContextToJSON(message.executionContext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Application>, I>>(base?: I): Application {
    return Application.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application {
    const message = createBaseApplication();
    message.address = object.address ?? new Uint8Array(0);
    message.executionContext = object.executionContext ?? 0;
    return message;
  },
};

function createBaseIntrinsicExecutionInput(): IntrinsicExecutionInput {
  return { address: new Uint8Array(0), input: new Uint8Array(0) };
}

export const IntrinsicExecutionInput: MessageFns<IntrinsicExecutionInput> = {
  encode(message: IntrinsicExecutionInput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.input.length !== 0) {
      writer.uint32(18).bytes(message.input);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IntrinsicExecutionInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntrinsicExecutionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.input = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntrinsicExecutionInput {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      input: isSet(object.input) ? bytesFromBase64(object.input) : new Uint8Array(0),
    };
  },

  toJSON(message: IntrinsicExecutionInput): unknown {
    const obj: any = {};
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.input.length !== 0) {
      obj.input = base64FromBytes(message.input);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IntrinsicExecutionInput>, I>>(base?: I): IntrinsicExecutionInput {
    return IntrinsicExecutionInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IntrinsicExecutionInput>, I>>(object: I): IntrinsicExecutionInput {
    const message = createBaseIntrinsicExecutionInput();
    message.address = object.address ?? new Uint8Array(0);
    message.input = object.input ?? new Uint8Array(0);
    return message;
  },
};

function createBaseIntrinsicExecutionOutput(): IntrinsicExecutionOutput {
  return { address: new Uint8Array(0), output: new Uint8Array(0), proof: new Uint8Array(0) };
}

export const IntrinsicExecutionOutput: MessageFns<IntrinsicExecutionOutput> = {
  encode(message: IntrinsicExecutionOutput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.output.length !== 0) {
      writer.uint32(18).bytes(message.output);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IntrinsicExecutionOutput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntrinsicExecutionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.output = reader.bytes();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntrinsicExecutionOutput {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      output: isSet(object.output) ? bytesFromBase64(object.output) : new Uint8Array(0),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
    };
  },

  toJSON(message: IntrinsicExecutionOutput): unknown {
    const obj: any = {};
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.output.length !== 0) {
      obj.output = base64FromBytes(message.output);
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IntrinsicExecutionOutput>, I>>(base?: I): IntrinsicExecutionOutput {
    return IntrinsicExecutionOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IntrinsicExecutionOutput>, I>>(object: I): IntrinsicExecutionOutput {
    const message = createBaseIntrinsicExecutionOutput();
    message.address = object.address ?? new Uint8Array(0);
    message.output = object.output ?? new Uint8Array(0);
    message.proof = object.proof ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMessage(): Message {
  return { hash: new Uint8Array(0), address: new Uint8Array(0), payload: new Uint8Array(0) };
}

export const Message: MessageFns<Message> = {
  encode(message: Message, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Message {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.address = reader.bytes();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.payload = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0),
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.payload.length !== 0) {
      obj.payload = base64FromBytes(message.payload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.hash = object.hash ?? new Uint8Array(0);
    message.address = object.address ?? new Uint8Array(0);
    message.payload = object.payload ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
