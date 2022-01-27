import { Request, Response } from 'express';
import { CustomersServices } from '../services/Customers.service';

export class CustomersControllers {
  // CREATE CUSTOMER
  async create(req: Request, res: Response): Promise<Response> {
    const service = new CustomersServices();
    const {name, user, password} = req.body;

    const result = await service.create({name, user, password});

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  // UPDATE BY ID
  async update(req: Request, res: Response) {
    const service = new CustomersServices();
    const { id } = req.params;
    const { name, user, password } = req.body;

    const result = await service.update({id, name, user, password});

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).end();
  }

  // DELETE BY ID
  async delete(req: Request, res: Response) {
    const service = new CustomersServices();
    const { id } = req.params;
    const result = await service.delete(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).end();
  }

  // READ ALL
  async read(req: Request, res: Response): Promise<Response> {
    const service = new CustomersServices();
    const result = await service.read();

    return res.status(200).json(result);
  }
}
