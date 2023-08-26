import { FindOneOptions } from 'typeorm';
import bookRepository from '../repositories/book.repository';
import { Book } from '../types/entities/book.entity';

export default class BookService {
  public static async getAllBooks() {
    const allBooks = await bookRepository.find();
    return allBooks;
  }
  public static async getBookById(id: number) {
    const book: Book = await this.checkAndGetIfBookExist(id);
    return book;
  }
  public static async addBook(book: Book) {
    await bookRepository.insert(book);
  }
  public static async updateBook(id: number, partialBook: Partial<Book>) {
    await this.checkAndGetIfBookExist(id);
    await bookRepository.update(id, partialBook);
  }
  public static async checkAndGetIfBookExist(bookId: number): Promise<Book> {
    console.log(bookId);

    const book = await bookRepository.findOne({ where: { id: bookId } } as FindOneOptions<Book>);
    if (!book) throw new Error('Book not found!');

    return book;
  }
}
