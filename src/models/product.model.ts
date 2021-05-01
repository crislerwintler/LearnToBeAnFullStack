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
  pieceName: string;
  @Column()
  model: string;
  @Column()
  refNumber: number;
  @Column()
  quantity: number;
  @Column()
  threadColor: string;
  @Column()
  washType: string;
  @Column()
  piecePrice: number;
  @Column()
  clientNumber: number;
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
