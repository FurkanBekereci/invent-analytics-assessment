import * as path from 'path';
import { Book } from '../types/entities/book.entity';
import { User } from '../types/entities/user.entity';
import { UserBook } from '../types/entities/userBook.entity';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  database: 'invent-analytics-db',
  username: 'postgres',
  password: '12345',
  logging: true,
  synchronize: true,
  migrations: [path.join(__dirname, '..', './migrations/*')],
  entities: [User, Book, UserBook],
});

export default AppDataSource;
