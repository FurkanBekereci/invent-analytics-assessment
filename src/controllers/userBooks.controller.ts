import { Request, Response } from 'express';
import UserBookService from '../services/userBook.service';
import { UserBook } from '../types/entities/userBook.entity';
import { ReturnRequest } from '../types/requests/userBook.request';
import UserBookMapper from '../mappers/userBook.mapper';

export const borrowBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  const userBook = {
    userId: parseInt(userId),
    bookId: parseInt(bookId),
    isReturned: false,
    score: -1,
  } as UserBook;

  await UserBookService.addUserBook(userBook);
  res.status(204).send('');
};
export const returnBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  const returnRequest = req.body as ReturnRequest;
  returnRequest.bookId = parseInt(bookId);
  returnRequest.userId = parseInt(userId);

  const userBook = UserBookMapper.returnToUserBook(returnRequest);
  userBook.isReturned = true;

  await UserBookService.updateUserBook(returnRequest.userId, returnRequest.bookId, userBook);

  res.status(204).send('');
};
