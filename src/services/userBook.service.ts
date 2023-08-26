import { FindManyOptions, FindOneOptions, Not } from 'typeorm';
import userBookRepository from '../repositories/userBook.repository';
import { UserBook } from '../types/entities/userBook.entity';
import UserService from './user.service';
import BookService from './book.service';
import { Book } from '../types/entities/book.entity';
import bookRepository from '../repositories/book.repository';

export default class UserBookService {
  public static async getAllUserBooks() {
    const data: UserBook[] = await userBookRepository.find();
    return data;
  }

  public static async getUserBookByUserAndBookId(userId: number, bookId: number) {
    const userBook: UserBook | null = await userBookRepository.findOne({
      where: { userId, bookId },
    } as FindOneOptions<UserBook>);

    if (!userBook) {
      throw new Error('UserBook not found!');
    }

    return userBook;
  }

  public static async addUserBook(userBook: UserBook) {
    //Bu ikisi hem userın hem de kitabın var olup olmadığını sorguluyor. Eğer yoksa error fırlatıyor.
    await UserService.checkAndGetIfUserExist(userBook.userId);
    await BookService.checkAndGetIfBookExist(userBook.bookId);

    //Ödünç verilen kitabın tekrar alınmaması için.
    await this.isAnyUserUsingThisBook(userBook.bookId);

    await userBookRepository.insert(userBook);
  }

  public static async updateUserBook(
    userId: number,
    bookId: number,
    partialUserBook: Partial<UserBook>
  ) {
    // const userBook = await this.checkAndGetIfUserBookExist(userId, bookId);
    const userBook = await userBookRepository.findOne({
      where: { bookId, userId, isReturned: false },
    } as FindOneOptions<UserBook>);

    if (!userBook) throw new Error('This book has not been borrowed from this user yet!');

    await userBookRepository.update({ id: userBook.id, userId, bookId }, partialUserBook);

    await this.updateBooksScore(userBook.bookId);
  }

  private static async checkAndGetIfUserBookExist(
    userId: number,
    bookId: number
  ): Promise<UserBook> {
    const book = await userBookRepository.findOne({
      where: { bookId, userId },
    } as FindOneOptions<UserBook>);
    if (!book) throw new Error('There is no book borrowed from this user!');

    return book;
  }

  private static async isAnyUserUsingThisBook(bookId: number) {
    const notReturnedBookCountWithThisId = await userBookRepository.count({
      where: { bookId, isReturned: false },
    } as FindManyOptions<UserBook>);

    if (notReturnedBookCountWithThisId > 0) throw new Error('This book is used in now.');
  }

  private static async updateBooksScore(bookId: number) {
    const bookScoredDifferentFromZero = await userBookRepository.find({
      where: { bookId, score: Not(-1) },
    } as FindManyOptions<UserBook>);

    const sum = bookScoredDifferentFromZero.reduce((acc, curr) => acc + curr.score, 0);
    const count = bookScoredDifferentFromZero.length;
    console.log('Sum : ', sum);
    console.log('Count : ', count);

    const newAverage = parseFloat((sum / count).toFixed(2));
    console.log('New average : ', newAverage);

    const partialBook: Partial<Book> = {
      score: newAverage,
    };
    await bookRepository.update(bookId, partialBook);
  }
}
