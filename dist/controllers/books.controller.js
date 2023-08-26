"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.insertBook = exports.getBookById = exports.getAllBooks = void 0;
const book_service_1 = __importDefault(require("../services/book.service"));
const book_mapper_1 = __importDefault(require("../mappers/book.mapper"));
const getAllBooks = async (req, res) => {
    const books = await book_service_1.default.getAllBooks();
    res.status(200).json(book_mapper_1.default.toListResponse(books));
};
exports.getAllBooks = getAllBooks;
const getBookById = async (req, res) => {
    const { bookId } = req.params;
    console.log('bookid : ', bookId);
    const book = await book_service_1.default.getBookById(parseInt(bookId));
    const bookResponse = book_mapper_1.default.toSingleResponse(book);
    res.status(200).json(bookResponse);
};
exports.getBookById = getBookById;
const insertBook = async (req, res) => {
    const bookRequest = req.body;
    const book = book_mapper_1.default.toBook(bookRequest);
    await book_service_1.default.addBook(book);
    res.status(201).send('');
};
exports.insertBook = insertBook;
const updateBook = async (req, res) => {
    res.status(200).send('update book');
};
exports.updateBook = updateBook;
const deleteBook = async (req, res) => {
    res.status(200).send('Delete books');
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=books.controller.js.map