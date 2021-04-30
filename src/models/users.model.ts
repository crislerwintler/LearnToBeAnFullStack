import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'users'})
export class Users {
@PrimaryGeneratedColumn()
 id: number;
@Column()
 first_name: string;
@Column()
 last_name: string;
@Column()
 email: string;
@Column()
 phone: number;
@CreateDateColumn()
 created_at: Date;
}
