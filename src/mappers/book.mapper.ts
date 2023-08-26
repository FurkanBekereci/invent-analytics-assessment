import { BookRequest } from '../types/requests/book.request';
import { Book } from '../types/entities/book.entity';
import { BookResponse, SingleBookResponse } from '../types/responses/book.response';

export default class BookMapper {
  public static toBook(bookPayload: BookRequest) {
    const bookEntity = new Book();
    bookEntity.name = bookPayload.name;
    return bookEntity;
  }

  public static toSingleResponse(book: Book): SingleBookResponse {
    const bookResponse: SingleBookResponse = {
      id: book.id,
      name: book.name,
      score: book.score,
    };
    return bookResponse;
  }
  public static toListResponse(books: Book[]): BookResponse[] {
    return books.map((book) => ({
      id: book.id,
      name: book.name,
    }));
  }
}
