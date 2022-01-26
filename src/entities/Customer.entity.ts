import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('customer')
export class Customer {
  @PrimaryColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    user: string;

  @Column()
    password: string;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
