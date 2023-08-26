import AppDataSource from '../db/db.config';
import { Book } from '../types/entities/book.entity';

export default AppDataSource.getRepository(Book);
