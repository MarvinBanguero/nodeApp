"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenes_controller_1 = require("../Controller/imagenes_controller");
class ImagenesRouter {
    constructor() {
        this.router = express_1.Router();
        this.router1 = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', imagenes_controller_1.imagenesController.create);
        this.router.put('/:id', imagenes_controller_1.imagenesController.delete);
        this.router.get('/', imagenes_controller_1.imagenesController.getAll);
        this.router.get('/:id', imagenes_controller_1.imagenesController.getOne);
        this.router1.get('/', imagenes_controller_1.imagenesController.getEnd);
        this.router.delete('/:id', imagenes_controller_1.imagenesController.delete);
    }
}
const imagenesRouter = new ImagenesRouter();
exports.default = imagenesRouter;
