"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = require("../types/entities/book.entity");
class BookMapper {
    static toBook(bookPayload) {
        const bookEntity = new book_entity_1.Book();
        bookEntity.name = bookPayload.name;
        return bookEntity;
    }
    static toSingleResponse(book) {
        const bookResponse = {
            id: book.id,
            name: book.name,
            score: book.score,
        };
        return bookResponse;
    }
    static toListResponse(books) {
        return books.map((book) => ({
            id: book.id,
            name: book.name,
        }));
    }
}
exports.default = BookMapper;
//# sourceMappingURL=book.mapper.js.map