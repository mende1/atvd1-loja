import { DeleteResult, getRepository } from 'typeorm';
import { Customer } from '../entities/Customer.entity';

interface CustomerRequestInterface {
  name: string,
  user: string,
  hashedPassword: string
}

interface UpdateRequestInterface {
  id: string,
  name: string,
  user: string,
  hashedPassword: string,
}

export class CustomersServices {
  // CREATE CUSTOMER
  async create(
      {name, user, hashedPassword}: CustomerRequestInterface,
  ): Promise<Customer | Error> {
    const repo = getRepository(Customer);

    if (await repo.findOne({user})) {
      return new Error('User already exists.');
    }

    const password = hashedPassword;

    const customer = repo.create({
      name,
      user,
      password,
    });

    await repo.save(customer);

    return customer;
  }

  // UPDATE BY ID
  async update(
      {id, name, user, hashedPassword}: UpdateRequestInterface,
  ): Promise<Customer | Error> {
    const repo = getRepository(Customer);

    const customer = await repo.findOne(id);

    if (!customer) {
      return new Error('User not found.');
    }

    customer.name = name ? name : customer.name;
    customer.user = user ? user : customer.user;
    customer.password = hashedPassword ? hashedPassword : customer.password;

    repo.save(customer);
  }

  // DELETE BY ID
  async delete(id: string): Promise<DeleteResult | Error> {
    const repo = getRepository(Customer);

    if (!(await repo.findOne(id))) {
      return new Error('Customer not found.');
    }

    return await repo.delete(id);
  }

  // READ ALL
  async read(): Promise<Customer[]> {
    const repo = getRepository(Customer);

    return await repo.find();
  }
}
