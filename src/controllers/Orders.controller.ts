import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Stock } from '../entities/Stock.entity';
import { OrdersServices } from '../services/Orders.service';
import { ProductsServices } from '../services/Products.service';

export class OrdersControllers {
  // CREATE ORDER
  async create(req: Request, res: Response): Promise<Response> {
    const orderService = new OrdersServices();
    const productService = new ProductsServices();
    const {productId, customerId, quantity} = req.body;

    const productRepo = getRepository(Stock);

    const existsProduct: Stock | undefined = await productRepo.findOne(
        productId,
    );

    if (!existsProduct) {
      return res.status(400).json(
          {
            error: 'Product does not exists.',
          },
      );
    }

    const quantityInStock = existsProduct.quantity;

    if (quantity > quantityInStock) {
      return res.status(400).json(
          {
            error: 'There is not enough stock.',
          },
      );
    }

    productService.reduceStock(productId, quantity);

    const result = await orderService.create({productId, customerId, quantity});

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  // DELETE ORDER BY ID
  async delete(req: Request, res: Response) {
    const service = new OrdersServices();

    const { id } = req.params;

    const result = await service.delete(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).end();
  }

  // READ ALL
  async read(req: Request, res: Response): Promise<Response> {
    const service = new OrdersServices();

    const result = await service.read();

    return res.status(200).json(result);
  }
}
