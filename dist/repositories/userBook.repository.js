"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../db/db.config"));
const userBook_entity_1 = require("../types/entities/userBook.entity");
exports.default = db_config_1.default.getRepository(userBook_entity_1.UserBook);
//# sourceMappingURL=userBook.repository.js.map