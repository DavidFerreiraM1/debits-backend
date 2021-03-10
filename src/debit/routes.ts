import Express from 'express';
import createDebit from './controllers/createDebit';

const router = Express();

router.post('/', createDebit.run);

export default router;