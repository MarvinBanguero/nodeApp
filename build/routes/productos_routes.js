"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controller_1 = require("../Controller/productos_controller");
class ProductoRouter {
    constructor() {
        this.router = express_1.Router();
        this.router1 = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productos_controller_1.productoController.list);
        this.router.get('/:id', productos_controller_1.productoController.getOne);
        this.router1.get('/', productos_controller_1.productoController.nroregistros);
        this.router.post('/', productos_controller_1.productoController.create);
        this.router.put('/:id', productos_controller_1.productoController.update);
        this.router.delete('/:id', productos_controller_1.productoController.delete);
    }
}
const productoRouter = new ProductoRouter();
exports.default = productoRouter;
