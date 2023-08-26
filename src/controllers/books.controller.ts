import { Request, Response } from 'express';
import BookService from '../services/book.service';
import BookMapper from '../mappers/book.mapper';
import { BookRequest } from '../types/requests/book.request';

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await BookService.getAllBooks();
  res.status(200).json(BookMapper.toListResponse(books));
};
export const getBookById = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  console.log('bookid : ', bookId);

  const book = await BookService.getBookById(parseInt(bookId));
  const bookResponse = BookMapper.toSingleResponse(book);
  res.status(200).json(bookResponse);
};
export const insertBook = async (req: Request, res: Response) => {
  const bookRequest = req.body as BookRequest;
  const book = BookMapper.toBook(bookRequest);
  await BookService.addBook(book);
  res.status(201).send('');
};
export const updateBook = async (req: Request, res: Response) => {
  res.status(200).send('update book');
};
export const deleteBook = async (req: Request, res: Response) => {
  res.status(200).send('Delete books');
};
