import { DeleteResult, getRepository } from 'typeorm';
import { Customer } from '../entities/Customer.entity';
import { Order } from '../entities/Order.entity';
import { Stock } from '../entities/Stock.entity';

interface OrderInterface {
  productId: string,
  customerId: string,
  quantity: number,
}

export class OrdersServices {
  // CREATE ORDER
  async create(
      {productId, customerId, quantity}: OrderInterface,
  ): Promise<Order | Error> {
    const repo = getRepository(Order);
    const repoProduct = getRepository(Stock);
    const repoCustomer = getRepository(Customer);

    if (!(await repoProduct.findOne(productId))) {
      return new Error('Product does not exists.');
    }

    if (!(await repoCustomer.findOne(customerId))) {
      return new Error('Customer does not exists.');
    }

    const order = repo.create({
      productId,
      customerId,
      quantity,
    });

    await repo.save(order);

    return order;
  }

  // DELETE ORDER BY ID
  async delete(id: string): Promise<DeleteResult | Error> {
    const repo = getRepository(Order);

    if (!(await repo.findOne(id))) {
      return new Error('Order not found.');
    }

    return await repo.delete(id);
  }

  // READ ALL
  async read(): Promise<Order[]> {
    const repo = getRepository(Order);

    return await repo.find();
  }
}
