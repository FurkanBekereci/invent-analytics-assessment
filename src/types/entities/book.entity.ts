import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserBook } from './userBook.entity';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ type: 'float', default: -1 })
  score!: number;

  @OneToMany(() => UserBook, (userBook) => userBook.book)
  userBooks: UserBook[];
}
