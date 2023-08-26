import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import { bookRoutes, userRoutes } from './routes';
import { notFoundMiddleware, errorMiddleware } from './middlewares';
import AppDataSource from './db/db.config';

const main = async () => {
  await AppDataSource.initialize();

  const app = express();

  //This is must for parsing application/json
  app.use(express.json());
  //This is not required for this assessment because there is no upload operation. But this is just practice.
  app.use(express.urlencoded({ extended: true }));

  app.use('/books', bookRoutes);
  app.use('/users', userRoutes);

  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

main();
