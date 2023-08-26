"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_repository_1 = __importDefault(require("../repositories/book.repository"));
class BookService {
    static async getAllBooks() {
        const allBooks = await book_repository_1.default.find();
        return allBooks;
    }
    static async getBookById(id) {
        const book = await this.checkAndGetIfBookExist(id);
        return book;
    }
    static async addBook(book) {
        await book_repository_1.default.insert(book);
    }
    static async updateBook(id, partialBook) {
        await this.checkAndGetIfBookExist(id);
        await book_repository_1.default.update(id, partialBook);
    }
    static async checkAndGetIfBookExist(bookId) {
        console.log(bookId);
        const book = await book_repository_1.default.findOne({ where: { id: bookId } });
        if (!book)
            throw new Error('Book not found!');
        return book;
    }
}
exports.default = BookService;
//# sourceMappingURL=book.service.js.map