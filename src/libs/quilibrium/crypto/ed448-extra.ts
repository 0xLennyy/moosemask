/**
 * peer private key size
 */
const PRIVATE_KEY_SIZE = 114
/**
 *  Ed448 public key size
 */
const PUBLIC_KEY_SIZE = 57

class Ed448Extra {
  privKey: Uint8Array
  pubKey: Uint8Array

  constructor(peerPrivKey: Uint8Array) {
    this.privKey = unmarshalEd448PrivateKey(peerPrivKey)
    this.pubKey = this.privKey.slice(PRIVATE_KEY_SIZE - PUBLIC_KEY_SIZE)
  }

  get publicKey(): Uint8Array {
    return this.pubKey
  }
}

function unmarshalEd448PrivateKey(data: Uint8Array): Uint8Array | null {
  switch (data.length) {
    case PRIVATE_KEY_SIZE + PUBLIC_KEY_SIZE:
      // remove redundant public key
      const redundantPk = data.slice(PRIVATE_KEY_SIZE)
      const pk = data.slice(
        PRIVATE_KEY_SIZE - PUBLIC_KEY_SIZE,
        PRIVATE_KEY_SIZE
      )
      if (!constantTimeCompare(pk, redundantPk)) {
        throw new Error('expected redundant ed448 public key to be redundant')
      }

      //  No point in storing the extra data.
      // const newKey = data.slice(0, PRIVATE_KEY_SIZE)
      return data.slice(0, PRIVATE_KEY_SIZE)

    case PRIVATE_KEY_SIZE:
      return data

    default:
      throw new Error(
        `expected ed448 data size to be ${PRIVATE_KEY_SIZE} or ${PRIVATE_KEY_SIZE + PUBLIC_KEY_SIZE}, got ${data.length}`
      )
  }
}

function constantTimeCompare(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i]
  }
  return diff === 0
}
