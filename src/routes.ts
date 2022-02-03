import { Router } from 'express';
import { CustomersControllers } from './controllers/Customers.controller';
import { OrdersControllers } from './controllers/Orders.controller';
import { ProductsControllers } from './controllers/Products.controller';

const routes = Router();

const customerController = new CustomersControllers();
const productController = new ProductsControllers();
const ordersController = new OrdersControllers();

routes.get('/readCustomers', customerController.read);
routes.post('/createCustomer', customerController.create);
routes.put('/updateCustomer/:id', customerController.update);
routes.delete('/deleteCustomer/:id', customerController.delete);

routes.get('/readProducts', productController.read);
routes.post('/createProduct', productController.create);

routes.get('/readOrders', ordersController.read);
routes.post('/createOrder', ordersController.create);
routes.delete('/deleteOrder/:id', ordersController.delete);

export default routes;
