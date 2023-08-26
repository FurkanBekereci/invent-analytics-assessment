"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const userBook_repository_1 = __importDefault(require("../repositories/userBook.repository"));
class UserService {
    static async getAllUsers() {
        const data = await user_repository_1.default.find();
        return data;
    }
    static async getUserById(id) {
        const user = await this.checkAndGetIfUserExist(id);
        const usersBooksWithNames = await userBook_repository_1.default.find({
            where: { userId: user.id },
            relations: ['book'],
        });
        user.userBooks = usersBooksWithNames;
        return user;
    }
    static async addUser(user) {
        await user_repository_1.default.insert(user);
    }
    static async updateUser(id, partialUser) {
        await this.checkAndGetIfUserExist(id);
        await user_repository_1.default.update(id, partialUser);
    }
    static async deleteUser(id) {
        await user_repository_1.default.delete(id);
    }
    static async checkAndGetIfUserExist(userId) {
        const book = await user_repository_1.default.findOne({
            where: { id: userId },
            relations: [],
        });
        if (!book)
            throw new Error('User not found!');
        return book;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map