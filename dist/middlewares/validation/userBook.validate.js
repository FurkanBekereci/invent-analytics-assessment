"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookValidation = void 0;
const Joi = __importStar(require("joi"));
class UserBookValidation {
}
exports.UserBookValidation = UserBookValidation;
_a = UserBookValidation;
UserBookValidation.userBookSchema = Joi.object({
    score: Joi.number().min(1).max(10).required(),
});
UserBookValidation.validateReturn = (req, res, next) => {
    const { body: userBook } = req;
    if (!userBook)
        throw new Error('No user book specified.');
    const { error } = _a.userBookSchema.validate(userBook);
    if (error)
        throw new Error(error.message);
    next();
};
//# sourceMappingURL=userBook.validate.js.map