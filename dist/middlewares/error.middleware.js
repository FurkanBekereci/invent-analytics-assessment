"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, next) => res
    .status(err.statusCode || 500)
    .json({ msg: err.message || `Something went wrong, try again later` });
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map