import express from 'express';
import {
  deleteBook,
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
} from '../controllers/books.controller';
import { BookValidation } from '../middlewares/validation/book.validate';
const router = express.Router();

router
  .get('/', getAllBooks)
  .post('/', BookValidation.validateBook, insertBook)
  .get('/:bookId', getBookById)
  .put('/:bookId', updateBook)
  .delete('/:bookId', deleteBook);

export default router;
