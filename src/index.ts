import {
  generateKeyPairSync,
  sign as nodeSign,
  verify as nodeVerify,
  KeyObject,
  createPrivateKey,
  createPublicKey,
} from "crypto";

export interface Ed25519KeyPair {
  publicKey: string;
  privateKey: string;
}

export function generateKeyPair(): Ed25519KeyPair {
  const { publicKey, privateKey } = generateKeyPairSync("ed25519", {
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
  return { publicKey, privateKey };
}

function toPriv(key: string | KeyObject): KeyObject {
  return typeof key === "string" ? createPrivateKey(key) : key;
}

function toPub(key: string | KeyObject): KeyObject {
  return typeof key === "string" ? createPublicKey(key) : key;
}

export function sign(
  message: string | Buffer,
  privateKey: string | KeyObject
): string {
  const data = Buffer.isBuffer(message) ? message : Buffer.from(message, "utf8");
  const sig = nodeSign(null, data, toPriv(privateKey));
  return sig.toString("base64");
}

export function verify(
  message: string | Buffer,
  signatureB64: string,
  publicKey: string | KeyObject
): boolean {
  const data = Buffer.isBuffer(message) ? message : Buffer.from(message, "utf8");
  const sig = Buffer.from(signatureB64, "base64");
  return nodeVerify(null, data, toPub(publicKey), sig);
}
