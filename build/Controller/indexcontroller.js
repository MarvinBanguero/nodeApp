"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Hello People');
    }
}
exports.indexController = new IndexController();
