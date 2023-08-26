"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
const db_config_1 = __importDefault(require("./db/db.config"));
const main = async () => {
    await db_config_1.default.initialize();
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use('/books', routes_1.bookRoutes);
    app.use('/users', routes_1.userRoutes);
    app.use(middlewares_1.notFoundMiddleware);
    app.use(middlewares_1.errorMiddleware);
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
};
main();
//# sourceMappingURL=app.js.map