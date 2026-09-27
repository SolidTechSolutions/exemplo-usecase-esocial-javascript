'use strict';

/**
 * [EN]    eSocial use case — single sign-evento endpoint, KMS custody.
 *         Start: node src/index.js
 *         POST http://localhost:8102/api/esocial/sign-evento
 * [PT-BR] Caso de uso eSocial — endpoint único de assinatura, custódia KMS.
 */

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { sign } = require('./service');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/esocial/sign-evento', upload.single('document'), async (req, res) => {
  const document = req.file;
  const { kmsCode } = req.body;
  if (!document || !kmsCode) return res.status(400).json({ error: 'document and kmsCode are required' });

  const signed = await sign(document, kmsCode);
  if (!signed) return res.status(500).json({ error: 'Signing failed. Check logs.' });

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Disposition', 'attachment; filename="evento_esocial_signed.xml"');
  return res.send(signed);
});

const PORT = process.env.PORT || 8102;
app.listen(PORT, () => console.info(`SolidSign eSocial use-case example running on port ${PORT}`));
