import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Path:', req.path);
  // console.log('Headers:', req.headers);
  console.log('Time: ', new Date());
  console.log('req method', req.method);
  next();
});

// FAVICON CATCH
router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', (req, res) => {
  res.send('Something + Express + TypeScript Server');
});

export default router;
