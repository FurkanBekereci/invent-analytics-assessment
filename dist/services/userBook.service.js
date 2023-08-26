"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const userBook_repository_1 = __importDefault(require("../repositories/userBook.repository"));
const user_service_1 = __importDefault(require("./user.service"));
const book_service_1 = __importDefault(require("./book.service"));
const book_repository_1 = __importDefault(require("../repositories/book.repository"));
class UserBookService {
    static async getAllUserBooks() {
        const data = await userBook_repository_1.default.find();
        return data;
    }
    static async getUserBookByUserAndBookId(userId, bookId) {
        const userBook = await userBook_repository_1.default.findOne({
            where: { userId, bookId },
        });
        if (!userBook) {
            throw new Error('UserBook not found!');
        }
        return userBook;
    }
    static async addUserBook(userBook) {
        await user_service_1.default.checkAndGetIfUserExist(userBook.userId);
        await book_service_1.default.checkAndGetIfBookExist(userBook.bookId);
        await this.isAnyUserUsingThisBook(userBook.bookId);
        await userBook_repository_1.default.insert(userBook);
    }
    static async updateUserBook(userId, bookId, partialUserBook) {
        const userBook = await userBook_repository_1.default.findOne({
            where: { bookId, userId, isReturned: false },
        });
        if (!userBook)
            throw new Error('This book has not been borrowed from this user yet!');
        await userBook_repository_1.default.update({ id: userBook.id, userId, bookId }, partialUserBook);
        await this.updateBooksScore(userBook.bookId);
    }
    static async checkAndGetIfUserBookExist(userId, bookId) {
        const book = await userBook_repository_1.default.findOne({
            where: { bookId, userId },
        });
        if (!book)
            throw new Error('There is no book borrowed from this user!');
        return book;
    }
    static async isAnyUserUsingThisBook(bookId) {
        const notReturnedBookCountWithThisId = await userBook_repository_1.default.count({
            where: { bookId, isReturned: false },
        });
        if (notReturnedBookCountWithThisId > 0)
            throw new Error('This book is used in now.');
    }
    static async updateBooksScore(bookId) {
        const bookScoredDifferentFromZero = await userBook_repository_1.default.find({
            where: { bookId, score: (0, typeorm_1.Not)(-1) },
        });
        const sum = bookScoredDifferentFromZero.reduce((acc, curr) => acc + curr.score, 0);
        const count = bookScoredDifferentFromZero.length;
        console.log('Sum : ', sum);
        console.log('Count : ', count);
        const newAverage = parseFloat((sum / count).toFixed(2));
        console.log('New average : ', newAverage);
        const partialBook = {
            score: newAverage,
        };
        await book_repository_1.default.update(bookId, partialBook);
    }
}
exports.default = UserBookService;
//# sourceMappingURL=userBook.service.js.map