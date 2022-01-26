import { Request, response, Response } from 'express';
import { CustomersServices } from '../services/CustomersServices';


export class CustomersControllers {
  async create(req: Request, res: Response) {
    const {name, user, password} = req.body;

    const service = new CustomersServices();

    const result = await service.create({name, user, password});

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return response.json(result);
  }
}
