"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = exports.errorMiddleware = void 0;
const error_middleware_1 = __importDefault(require("./error.middleware"));
exports.errorMiddleware = error_middleware_1.default;
const not_found_middleware_1 = __importDefault(require("./not-found.middleware"));
exports.notFoundMiddleware = not_found_middleware_1.default;
//# sourceMappingURL=index.js.map