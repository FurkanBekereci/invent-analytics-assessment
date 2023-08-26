"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../db/db.config"));
const user_entity_1 = require("../types/entities/user.entity");
exports.default = db_config_1.default.getRepository(user_entity_1.User);
//# sourceMappingURL=user.repository.js.map