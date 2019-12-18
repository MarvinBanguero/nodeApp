"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cloudinary_controller_1 = require("../Controller/cloudinary_controller");
class CloudinaryRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cloudinary_controller_1.cloudinaryController.get);
    }
}
const cloudinaryRouter = new CloudinaryRouter();
exports.default = cloudinaryRouter;
