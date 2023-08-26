import { UserRequest } from '../types/requests/user.request';
import { User } from '../types/entities/user.entity';
import { SingleUserResponse, UserResponse } from '../types/responses/user.response';

export default class UserMapper {
  public static toUser(requestPayload: UserRequest) {
    const userEntity: User = new User();
    userEntity.name = requestPayload.name;
    return userEntity;
  }

  public static toSingleResponse(user: User): UserResponse {
    const userBooks = user.userBooks;
    const pastUserBooks = userBooks.filter((book) => book.score != -1);
    const presentUserBooks = userBooks.filter((book) => book.score == -1);

    const userResponse: SingleUserResponse = {
      id: user.id,
      name: user.name,
      books: {
        past: pastUserBooks.map((userBook) => ({
          name: userBook.book.name,
          userScore: userBook.score,
        })),
        present: presentUserBooks.map((userBook) => ({
          name: userBook.book.name,
        })),
      },
    };
    return userResponse;
  }

  public static toListResponse(users: User[]): UserResponse[] {
    const userListResponse = users.map(
      (user) =>
        ({
          id: user.id,
          name: user.name,
        } as UserResponse)
    );

    return userListResponse;
  }
}
