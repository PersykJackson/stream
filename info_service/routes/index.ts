import express from 'express';
import streams from './streams';

const router = express.Router();

router.get('/streams', streams);

export default router;
