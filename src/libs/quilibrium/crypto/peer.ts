import * as multihashes from 'multihashes'

import { KeyType, PublicKey } from '~libs/quilibrium/protobufs/pb/crypto'

const maxInlineKeyLength = 42
let AdvancedEnableInlining = true

export function IDFromPublicKey(pubKey: Uint8Array) {
  const b = marshalPublicKey(pubKey)
  let alg = multihashes.names['sha2-256']

  if (AdvancedEnableInlining && b.length <= maxInlineKeyLength) {
    alg = multihashes.names['identity']
  }

  const hash = multihashes.encode(b, alg)
  // return peer id
  return multihashes.toB58String(hash)
}

export function marshalPublicKey(k: Uint8Array): Uint8Array {
  const pbPublicKey: PublicKey = {
    Type: KeyType.Ed448,
    Data: k
  }
  return PublicKey.encode(pbPublicKey).finish()
}
