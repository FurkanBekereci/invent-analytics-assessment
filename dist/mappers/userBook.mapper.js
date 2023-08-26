"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userBook_entity_1 = require("../types/entities/userBook.entity");
class UserBookMapper {
    static returnToUserBook(returnRequest) {
        const userBookEntity = new userBook_entity_1.UserBook();
        userBookEntity.score = returnRequest.score;
        userBookEntity.userId = returnRequest.userId;
        userBookEntity.bookId = returnRequest.bookId;
        return userBookEntity;
    }
}
exports.default = UserBookMapper;
//# sourceMappingURL=userBook.mapper.js.map