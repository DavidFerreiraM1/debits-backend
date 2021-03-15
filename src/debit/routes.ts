import Express from 'express';
import createDebit from './controllers/createDebit';
import getAllDebit from './controllers/getAllDebit';
import removeDebit from './controllers/removeDebit';
import updateDebit from './controllers/updateDebit';

const router = Express();

router.post('/', createDebit.run);
router.get('/', getAllDebit.run);
router.put('/:id', updateDebit.run);
router.delete('/:id', removeDebit.run);

export default router;