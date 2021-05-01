import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  customer: string;
  @Column()
  model: string;
  @Column()
  reference: number;
  @Column()
  quantity: number;
  @Column()
  price: number;
  @Column()
  sizes: string;
  @Column()
  thread: number;
  @Column()
  threadColor: string;
  @Column()
  wash: string;
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
