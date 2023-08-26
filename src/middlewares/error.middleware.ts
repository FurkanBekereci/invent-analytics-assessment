import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) =>
  res
    .status(err.statusCode || 500)
    .json({ msg: err.message || `Something went wrong, try again later` });

export default errorMiddleware;
