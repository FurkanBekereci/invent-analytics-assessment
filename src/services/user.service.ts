import { FindOneOptions } from 'typeorm';
import userRepository from '../repositories/user.repository';
import { User } from '../types/entities/user.entity';
import userBookRepository from '../repositories/userBook.repository';

export default class UserService {
  public static async getAllUsers() {
    const data: User[] = await userRepository.find();
    return data;
  }
  public static async getUserById(id: number) {
    const user: User | null = await this.checkAndGetIfUserExist(id);

    const usersBooksWithNames = await userBookRepository.find({
      where: { userId: user.id },
      relations: ['book'],
    });

    user.userBooks = usersBooksWithNames;

    return user;
  }
  public static async addUser(user: User) {
    await userRepository.insert(user);
  }

  public static async updateUser(id: number, partialUser: Partial<User>) {
    await this.checkAndGetIfUserExist(id);
    await userRepository.update(id, partialUser);
  }
  public static async deleteUser(id: number) {
    await userRepository.delete(id);
  }

  //Helper functions
  public static async checkAndGetIfUserExist(userId: number): Promise<User> {
    const book = await userRepository.findOne({
      where: { id: userId },
      relations: [],
    } as FindOneOptions<User>);
    if (!book) throw new Error('User not found!');

    return book;
  }
}
