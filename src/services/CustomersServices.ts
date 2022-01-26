import { getRepository } from 'typeorm';
import { Customer } from '../entities/Customer.entity';

interface CustomerRequest {
  name: string,
  user: string,
  password: string
}

export class CustomersServices {
  async create(
      {name, user, password}: CustomerRequest,
  ): Promise<Customer | Error> {
    const repo = getRepository(Customer);

    if (await repo.findOne({user})) {
      return new Error('User already exists.');
    }

    const customer = repo.create({
      name,
      user,
      password,
    });

    await repo.save(customer);

    return customer;
  }
}
