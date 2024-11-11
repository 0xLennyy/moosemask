import { ed448 } from '@noble/curves/ed448'
import PeerId from 'peer-id'

export function getPrivKey(account: string): string {
  return '0x'
}

export async function privKeyToPeerId(peerPrivKey: string): Promise<string> {
  const peerPrivKeyBuffer = Buffer.from(peerPrivKey, 'hex')


  

  const pubKey = ed448.getPublicKey(peerPrivKeyBuffer)

  const id = await PeerId.createFromPubKey(pubKey)

  return id.toString()
}

export function peerIdToAccount(peerId: string): string {
  return '0x'
}
