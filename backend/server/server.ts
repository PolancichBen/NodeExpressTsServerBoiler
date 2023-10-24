import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

// Entry points
// import something from './routes/something';

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));

// app.use('/something', something);

app.get('/favicon.ico', (req, res) => res.status(204));

// Landing
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', async (req: Request, res: Response) => {
  try {
    res.send('SUCCESS');
  } catch (err) {
    console.log('test err:', err);
    res.send('ERROR');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port:${port}`);
});
