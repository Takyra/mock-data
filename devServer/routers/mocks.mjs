import express from 'express';

import auth from '../data/test.json' assert { type: 'json' };

export const router = new express.Router();

router.get('/test', (req, res) => res.json(auth));

export default router;