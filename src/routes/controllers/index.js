import express from 'express';

const router = express.Router();

router.use('/user', require('./user').default);
router.use('/movie', require('./movie').default);
router.use('/lent', require('./lent').default);
router.use('/setting', require('./setting').default);

export default router;
