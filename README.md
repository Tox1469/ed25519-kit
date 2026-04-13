[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/ed25519-kit/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/ed25519-kit/actions)
[![License](https://img.shields.io/github/license/Tox1469/ed25519-kit?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/ed25519-kit?style=flat-square)](https://github.com/Tox1469/ed25519-kit/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/ed25519-kit?style=flat-square)](https://github.com/Tox1469/ed25519-kit/stargazers)

---

# ed25519-kit

Helpers minimos para assinatura Ed25519 usando o modulo `crypto` nativo do Node.js.

## Instalacao

```bash
npm install ed25519-kit
```

## Uso

```ts
import { generateKeyPair, sign, verify } from "ed25519-kit";

const kp = generateKeyPair();
const sig = sign("payload", kp.privateKey);
const ok = verify("payload", sig, kp.publicKey);
```

## Seguranca

- Ed25519 e deterministico e resistente a falhas de RNG em tempo de assinatura.
- Proteja a chave privada e nunca compartilhe o arquivo PEM.
- Verifique sempre a assinatura antes de confiar em dados recebidos.

## Licenca

MIT