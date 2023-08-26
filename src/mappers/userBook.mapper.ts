import { UserBook } from '../types/entities/userBook.entity';
import { ReturnRequest } from '../types/requests/userBook.request';

export default class UserBookMapper {
  public static returnToUserBook(returnRequest: ReturnRequest) {
    const userBookEntity = new UserBook();
    userBookEntity.score = returnRequest.score;
    userBookEntity.userId = returnRequest.userId;
    userBookEntity.bookId = returnRequest.bookId;
    return userBookEntity;
  }
}
