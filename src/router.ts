import Express from 'express';
import debitRoutes from './debit/routes';

const appRoutes = Express();

appRoutes.use('', debitRoutes);

export default appRoutes;