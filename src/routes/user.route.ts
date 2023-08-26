import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUserById,
  insertUser,
  updateUser,
} from '../controllers/users.controller';
import { borrowBook, returnBook } from '../controllers/userBooks.controller';
import { UserBookValidation } from '../middlewares/validation/userBook.validate';
import { UserValidation } from '../middlewares/validation/user.validate';

const router = express.Router();

router
  .get('/', getAllUsers)
  .post('/', UserValidation.validateUser, insertUser)
  .get('/:userId', getUserById)
  .put('/:userId', updateUser)
  .delete('/:userId', deleteUser)
  .post('/:userId/borrow/:bookId', borrowBook)
  .post('/:userId/return/:bookId', UserBookValidation.validateReturn, returnBook);

export default router;
