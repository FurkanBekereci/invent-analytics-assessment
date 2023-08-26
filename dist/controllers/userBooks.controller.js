"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBook = exports.borrowBook = void 0;
const userBook_service_1 = __importDefault(require("../services/userBook.service"));
const userBook_mapper_1 = __importDefault(require("../mappers/userBook.mapper"));
const borrowBook = async (req, res) => {
    const { userId, bookId } = req.params;
    const userBook = {
        userId: parseInt(userId),
        bookId: parseInt(bookId),
        isReturned: false,
        score: -1,
    };
    await userBook_service_1.default.addUserBook(userBook);
    res.status(204).send('');
};
exports.borrowBook = borrowBook;
const returnBook = async (req, res) => {
    const { userId, bookId } = req.params;
    const returnRequest = req.body;
    returnRequest.bookId = parseInt(bookId);
    returnRequest.userId = parseInt(userId);
    const userBook = userBook_mapper_1.default.returnToUserBook(returnRequest);
    userBook.isReturned = true;
    await userBook_service_1.default.updateUserBook(returnRequest.userId, returnRequest.bookId, userBook);
    res.status(204).send('');
};
exports.returnBook = returnBook;
//# sourceMappingURL=userBooks.controller.js.map