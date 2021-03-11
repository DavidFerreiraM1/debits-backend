import Express from 'express';
import createDebit from './controllers/createDebit';
import getAllDebit from './controllers/getAllDebit';

const router = Express();

router.post('/', createDebit.run);
router.get('/', getAllDebit.run);

export default router;