import AppDataSource from '../db/db.config';
import { User } from '../types/entities/user.entity';

export default AppDataSource.getRepository(User);
