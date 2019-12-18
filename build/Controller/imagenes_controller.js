"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../routes/database"));
class ImagenesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO imagenprod set ?', [req.body]);
            res.json({ message: 'imagen Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM imagenprod WHERE id_imagen = ?', id);
            res.json({ message: 'Juego Eliminado ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE imagenprod set ? WHERE id_imagen=?', [req.body, id]);
            res.json({ text: 'actualizando producto ' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT imagen FROM imagenprod,producto WHERE id_prod=? and id_producto=' + req.params.id, req.params.id, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM imagenprod', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
        });
    }
    getEnd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM producto order by id_producto desc limit 1 ', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
            console.log("a");
        });
    }
}
exports.imagenesController = new ImagenesController();
