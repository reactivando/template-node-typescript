import 'dotenv/config';
import express from 'express';

const app = express();

app.use('/', (_req, res) => {
  return res.send('Hello World!');
});

export default app;
