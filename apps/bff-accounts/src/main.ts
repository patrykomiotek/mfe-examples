/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();
app.use(cors()); // TODO: setup for production
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to bff-accounts!' });
});

app.get('/api/accounts', (req, res) => {
  res.send([
    {
      id: 1,
      value: '12 1234 1234 1234 1234 1234 1234',
    },
    {
      id: 2,
      value: '32 4321 4321 4321 4321 4321 4321',
    },
    {
      id: 3,
      value: '45 6578 6578 6578 6578 6578 6578',
    },
  ]);
});

const port = process.env.PORT || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
