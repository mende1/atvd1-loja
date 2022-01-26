import { Router } from 'express';
import { CustomersControllers } from './controllers/CustomersControllers';

const routes = Router();

routes.post('/createCustomer', new CustomersControllers().create);

export default routes;
