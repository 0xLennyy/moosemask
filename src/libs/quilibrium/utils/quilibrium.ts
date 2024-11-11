import BN from 'bn.js'

import { IDFromPublicKey } from '~libs/quilibrium/crypto/peer'

export function getPrivKey(account: string): string {
  return '0x'
}

export async function privKeyToPeerId(peerPrivKey: string): Promise<string> {
  const peerPrivKeyBuffer = Buffer.from(peerPrivKey, 'hex')

  let ed448Extra = new Ed448Extra(peerPrivKeyBuffer)

  const pubKey = ed448Extra.pubKey

  const id = IDFromPublicKey(pubKey)

  return id.toString()
}

export function peerIdToAccount(peerId: string): string {
  return '0x'
}

export function bigintToUint8Array(value: bigint): Uint8Array {
  const byteArray = new Uint8Array(32)
  for (let i = 0; i < byteArray.length; i++) {
    const byte = Number((value >> BigInt((31 - i) * 8)) & BigInt(0xff))
    byteArray[i] = byte
  }
  return byteArray
}

export function uint8ArrayToBigInt(value: Uint8Array): bigint {
  return BigInt(new BN(value).toString())
}
