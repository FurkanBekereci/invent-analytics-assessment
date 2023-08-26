"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const userBooks_controller_1 = require("../controllers/userBooks.controller");
const userBook_validate_1 = require("../middlewares/validation/userBook.validate");
const user_validate_1 = require("../middlewares/validation/user.validate");
const router = express_1.default.Router();
router
    .get('/', users_controller_1.getAllUsers)
    .post('/', user_validate_1.UserValidation.validateUser, users_controller_1.insertUser)
    .get('/:userId', users_controller_1.getUserById)
    .put('/:userId', users_controller_1.updateUser)
    .delete('/:userId', users_controller_1.deleteUser)
    .post('/:userId/borrow/:bookId', userBooks_controller_1.borrowBook)
    .post('/:userId/return/:bookId', userBook_validate_1.UserBookValidation.validateReturn, userBooks_controller_1.returnBook);
exports.default = router;
//# sourceMappingURL=user.route.js.map