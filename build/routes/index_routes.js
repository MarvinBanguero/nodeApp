"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../Controller/index_controller");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', index_controller_1.indexController.index);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
