import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Customer } from './Customer.entity';
import { Stock } from './Stock.entity';

@Entity('orders')
export class Order {
  @PrimaryColumn()
    id: string;

  @Column()
    productId: string;

  @ManyToOne(() => Stock)
  @JoinColumn({ name: 'productId' })
    product: Stock;

  @Column()
    customerId: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customerId' })
    customer: Customer;

  @Column()
    quantity: number;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
