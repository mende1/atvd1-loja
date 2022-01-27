import { Router } from 'express';
import { CustomersControllers } from './controllers/Customers.controller';
import { ProductsControllers } from './controllers/Products.controller';

const routes = Router();

const customerController = new CustomersControllers();
const productController = new ProductsControllers();

routes.get('/readCustomers', customerController.read);
routes.post('/createCustomer', customerController.create);
routes.put('/updateCustomer/:id', customerController.update);
routes.delete('/deleteCustomer/:id', customerController.delete);

routes.get('/readProducts', productController.read);
routes.post('/createProduct', productController.create);

export default routes;
