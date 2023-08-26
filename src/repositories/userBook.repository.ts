import AppDataSource from '../db/db.config';
import { UserBook } from '../types/entities/userBook.entity';

export default AppDataSource.getRepository(UserBook);
