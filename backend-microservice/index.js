/* Crypto Price Microservice
 *
 * Copyright 2024 Microsoft Corporation
 *
 * Author: Brendon Matheson
 */

const express = require('express');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

const app = express();

app.use(express.text());
app.use(expressLogger);

const port = 3000;

app.get('/', (req, res) => {
  logger.debug(`Received request: ${req.body}`);
  res.send(req.query);
});



app.listen(port, () => {
  logger.info('Server listening on port 3000');
});
