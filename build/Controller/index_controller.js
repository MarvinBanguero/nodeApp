"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../routes/database"));
class IndexController {
    index(req, res) {
        database_1.default.query('Describe producto');
        res.send('Hello Inicio');
    }
}
exports.indexController = new IndexController();
