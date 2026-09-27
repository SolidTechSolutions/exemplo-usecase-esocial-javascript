# 🇧🇷 SolidSign API - Caso de Uso: eSocial — JavaScript

Este projeto demonstra a integração com a **SolidSign API** para assinar eventos do **eSocial** (S-1000, S-2200 e qualquer outro evento S-xxxx): uma assinatura XML única sobre o envelope inteiro, com o certificado e-CPF/e-CNPJ do empregador, via KMS SolidSign.

## Endpoint

`POST /api/esocial/sign-evento` — recebe o XML do evento (`document`) e o `kmsCode` do empregador, retorna o XML assinado.

## Parâmetros de assinatura (fixos, iguais pra qualquer evento)

`profile=XML_INTERNATIONAL`, `signaturePackaging=ENVELOPED`, `hashAlgorithm=SHA256`, `canonicalizationMethod=INCLUSIVE`, `isRemoveXPathExclusionFilter=true`, `isRemoveNamespacePrefixFromNodeNames=true`.

## Stack
1. Node.js 18+
2. Express + Multer

## Como Executar

```bash
npm install
cp .env.example .env   # edite com seu token
npm start
```

```
curl -X POST http://localhost:8102/api/esocial/sign-evento \
  -F "document=@evento-s1000.xml" -F "kmsCode=$KMS_EMPREGADOR" \
  -o evento-s1000-assinado.xml
```

## Outros métodos de certificação

Para HSM em nuvem ou navegador (PKCS#1), use os mesmos parâmetros nos exemplos genéricos [`exemplo-javascript-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-cloud) e [`exemplo-javascript-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-pkcs1).

## Tratamento de Erros
O sistema loga o JSON detalhado de erro da SolidSign.

---

# 🇬🇧 SolidSign API - Use Case: eSocial — JavaScript

Covers signing **eSocial** events (S-1000, S-2200, any S-xxxx event): a single XML signature over the entire envelope, with the employer's e-CPF/e-CNPJ certificate, via SolidSign's KMS.

## Endpoint

`POST /api/esocial/sign-evento` — takes the event XML (`document`) and the employer's `kmsCode`, returns the signed XML.

## Stack
1. Node.js 18+
2. Express + Multer

## How to Run

```bash
npm install
cp .env.example .env
npm start
```

## Other certification methods

For cloud HSM or browser (PKCS#1), apply the same parameters to [`exemplo-javascript-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-cloud) and [`exemplo-javascript-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-pkcs1).

## Error Handling
The system logs SolidSign's detailed error JSON.

---

# 🇪🇸 SolidSign API - Caso de Uso: eSocial — JavaScript

Cubre la firma de eventos del **eSocial**: una única firma XML sobre el sobre entero, con el certificado e-CPF/e-CNPJ del empleador, vía KMS.

## Endpoint

`POST /api/esocial/sign-evento` — recibe el XML del evento (`document`) y el `kmsCode` del empleador, devuelve el XML firmado.

## Stack
1. Node.js 18+
2. Express + Multer

## Cómo Ejecutar

```bash
npm install
cp .env.example .env
npm start
```

## Otros métodos de certificación

Para HSM en la nube o navegador (PKCS#1), aplique los mismos parámetros a [`exemplo-javascript-integracao-xml-cloud`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-cloud) y [`exemplo-javascript-integracao-xml-pkcs1`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-xml-pkcs1).

## Gestión de Errores
El sistema registra el JSON detallado de errores de SolidSign.
