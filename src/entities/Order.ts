import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Customer } from './Customer';
import { Stock } from './Stock';

@Entity('orders')
export class Order {
  @PrimaryColumn()
    id: string;

  @Column()
    product_id: string;

  @ManyToOne(() => Stock)
  @JoinColumn({ name: 'product_id' })
    product: Stock;

  @Column()
    customer_id: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
    customer: Customer;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
