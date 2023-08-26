"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../types/entities/user.entity");
class UserMapper {
    static toUser(requestPayload) {
        const userEntity = new user_entity_1.User();
        userEntity.name = requestPayload.name;
        return userEntity;
    }
    static toSingleResponse(user) {
        const userBooks = user.userBooks;
        const pastUserBooks = userBooks.filter((book) => book.score != -1);
        const presentUserBooks = userBooks.filter((book) => book.score == -1);
        const userResponse = {
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
    static toListResponse(users) {
        const userListResponse = users.map((user) => ({
            id: user.id,
            name: user.name,
        }));
        return userListResponse;
    }
}
exports.default = UserMapper;
//# sourceMappingURL=user.mapper.js.map