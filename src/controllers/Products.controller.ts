import { ProductsServices } from '../services/Products.service';
import { Request, Response } from 'express';

export class ProductsControllers {
  // CREATE PRODUCT
  async create(req: Request, res: Response): Promise<Response> {
    const service = new ProductsServices();

    const { name, quantity } = req.body;

    const result = await service.create({name, quantity});

    if (result instanceof Error) {
      res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  // READ ALL
  async read(req: Request, res: Response): Promise<Response> {
    const service = new ProductsServices();

    const result = await service.read();

    return res.status(200).json(result);
  }
}
