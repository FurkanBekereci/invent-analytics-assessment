"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("../controllers/books.controller");
const book_validate_1 = require("../middlewares/validation/book.validate");
const router = express_1.default.Router();
router
    .get('/', books_controller_1.getAllBooks)
    .post('/', book_validate_1.BookValidation.validateBook, books_controller_1.insertBook)
    .get('/:bookId', books_controller_1.getBookById)
    .put('/:bookId', books_controller_1.updateBook)
    .delete('/:bookId', books_controller_1.deleteBook);
exports.default = router;
//# sourceMappingURL=book.route.js.map