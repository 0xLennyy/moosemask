import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

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

  balance(address: string): Promise<any> {
    return this.callMethod("balance", { address })
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

export default QuilibriumGrpcClient
