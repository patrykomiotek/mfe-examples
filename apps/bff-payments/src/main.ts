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
  res.send({ message: 'Welcome to bff-payments!' });
});

app.get('/api/payments', (req, res) => {
  res.send([
    {
      id: 5,
      amount: 510,
      title: 'Kawiarnia Kraków',
      date: '13.08.2024',
    },
    {
      id: 4,
      amount: 200,
      title: 'Multisklep Warszawa',
      date: '12.08.2024',
    },
    {
      id: 3,
      amount: 320,
      title: 'Kawiarnia Wrocław',
      date: '10.08.2024',
    },
    {
      id: 2,
      amount: 440,
      title: 'Multisklep Poznań',
      date: '08.08.2024',
    },
    {
      id: 1,
      amount: 100,
      title: 'Księgarnia Łódź',
      date: '06.08.2024',
    },
  ]);
});

const port = process.env.PORT || 3335;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
