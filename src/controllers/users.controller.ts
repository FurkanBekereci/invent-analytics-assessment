import { Request, Response } from 'express';
import UserMapper from '../mappers/user.mapper';
import UserService from '../services/user.service';
import { UserRequest } from '../types/requests/user.request';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  const userListResponse = UserMapper.toListResponse(users);
  res.status(200).json(userListResponse);
};
export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await UserService.getUserById(parseInt(userId));
  const userResponse = UserMapper.toSingleResponse(user);
  res.status(200).json(userResponse);
};
export const insertUser = async (req: Request, res: Response) => {
  const userRequest = req.body as UserRequest;
  const user = UserMapper.toUser(userRequest);
  await UserService.addUser(user);
  res.status(201).send('');
};
export const updateUser = async (req: Request, res: Response) => {
  res.status(200).send('update user');
};
export const deleteUser = async (req: Request, res: Response) => {
  res.status(200).send('Delete users');
};
