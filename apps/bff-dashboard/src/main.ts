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
  res.send({ message: 'Welcome to bff-dashboard!' });
});

app.get('/api/products', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
    },
  ]);
});

app.get('/api/shortcuts', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Short 1',
    },
    {
      id: 2,
      name: 'Short 2',
    },
    {
      id: 3,
      name: 'Short 3',
    },
  ]);
});

app.get('/api/links', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Link 1',
    },
    {
      id: 2,
      name: 'Link 2',
    },
    {
      id: 3,
      name: 'Link 3',
    },
  ]);
});

app.get('/api/info', (req, res) => {
  res.send({
    message: 'lorem ipsum',
  });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
