import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import emulateTimeout from './middlewares/emulateTimeout.mjs';
import mocks from './routers/mocks.mjs';

const PORT = 3070;
const app = express();

app.use(cors());

app.use(bodyParser.json({
  limit: '10mb',
  strict: false,
}));

app.use(bodyParser.urlencoded({
  limit: '10mb',
  extended: true,
}));

app.use(emulateTimeout(1000));

app.use('/api/mock/', mocks);

app.get('*', (req, res) => {
  process.stdout.write('No route');
  res.status(404).send({ error: 'Route not found' });
});

app.listen(PORT, () => {
  process.stdout.write(`Mocks listening on ${PORT}!`);
});