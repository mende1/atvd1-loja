import { getRepository } from 'typeorm';
import { Stock } from '../entities/Stock.entity';

interface ProductInterface {
  name: string,
  quantity: number,
}

export class ProductsServices {
  // CREATE PRODUCT
  async create({name, quantity}: ProductInterface): Promise<Stock | Error> {
    const repo = getRepository(Stock);

    if (await repo.findOne(name)) {
      return new Error('Product already exists.');
    }

    const product = repo.create({
      name,
      quantity,
    });

    await repo.save(product);

    return product;
  }

  async reduceStock(id: string, quantity: number) {
    const repo = getRepository(Stock);

    const product = await repo.findOne(id);

    product.quantity = product.quantity - quantity;

    repo.save(product);
  }

  // READ ALL
  async read(): Promise<Stock[]> {
    const repo = getRepository(Stock);

    return await repo.find();
  }
}
