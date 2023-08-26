"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.insertUser = exports.getUserById = exports.getAllUsers = void 0;
const user_mapper_1 = __importDefault(require("../mappers/user.mapper"));
const user_service_1 = __importDefault(require("../services/user.service"));
const getAllUsers = async (req, res) => {
    const users = await user_service_1.default.getAllUsers();
    const userListResponse = user_mapper_1.default.toListResponse(users);
    res.status(200).json(userListResponse);
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const { userId } = req.params;
    const user = await user_service_1.default.getUserById(parseInt(userId));
    const userResponse = user_mapper_1.default.toSingleResponse(user);
    res.status(200).json(userResponse);
};
exports.getUserById = getUserById;
const insertUser = async (req, res) => {
    const userRequest = req.body;
    const user = user_mapper_1.default.toUser(userRequest);
    await user_service_1.default.addUser(user);
    res.status(201).send('');
};
exports.insertUser = insertUser;
const updateUser = async (req, res) => {
    res.status(200).send('update user');
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    res.status(200).send('Delete users');
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map