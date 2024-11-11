import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { poseidon } from '@iden3/js-crypto'

import { GetTokenInfoRequest } from '~libs/quilibrium/protobufs/pb/node_pb'
import { NodeServiceClient } from '~libs/quilibrium/protobufs/pb/NodeServiceClientPb'
import {
  bigintToUint8Array,
  privKeyToPeerId,
  uint8ArrayToBigInt
} from '~libs/quilibrium/utils/quilibrium'

class QuilibriumGrpcClient {
  private client: grpc.Client

  constructor(
    protoPath: string,
    packageName: string,
    serviceName: string,
    address: string
  ) {
    const packageDefinition = protoLoader.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    })

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any
    const service = protoDescriptor[packageName][serviceName]

    this.client = new service(address, grpc.credentials.createInsecure())
  }

  callMethod(methodName: string, requestData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client[methodName](
        requestData,
        (error: grpc.ServiceError | null, response: any) => {
          if (error) {
            reject(error)
          } else {
            resolve(response)
          }
        }
      )
    })
  }

  async balance(peerPrivKey: string): Promise<any> {
    // const client = await getGRPCClient()
    const client = new NodeServiceClient('rpc.quilibrium.com:8337')

    const peerId = await privKeyToPeerId(peerPrivKey)

    const addr = poseidon.hashBytes(Buffer.from(peerId))
    const addrBytes = bigintToUint8Array(addr)

    const request = new GetTokenInfoRequest()
    request.setAddress(addrBytes)
    const response = await client.getTokenInfo(request)

    uint8ArrayToBigInt(response.getOwnedTokens() as Uint8Array)
    // TODO

    return
  }

  send() {
    // ...
  }

  merge() {
    // ...
  }

  coins() {
    // ...
  }
}

async function getGRPCClient() {
  return new grpc.Client(
    'rpc.quilibrium.com:8337',
    grpc.credentials.createInsecure()
  )
}

export default QuilibriumGrpcClient
