import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';

@Entity()
export class UserBook extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn({ type: 'int' })
  id: number;

  @PrimaryColumn({ type: 'int' })
  userId: number;

  @PrimaryColumn({ type: 'int' })
  bookId: number;

  @ManyToOne(() => Book, (book) => book.userBooks)
  book: Book;

  @ManyToOne(() => User, (user) => user.userBooks)
  user: User;

  @Column({ type: 'boolean' })
  isReturned: boolean;

  @Column({ type: 'int' })
  score: number;
}
