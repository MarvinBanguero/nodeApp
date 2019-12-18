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
class ProductoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM producto', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
        });
    }
    nroregistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT COUNT(*) FROM producto', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM producto WHERE id_producto=' + req.params.id, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            res.json(producto);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO producto set ?', [req.body]);
            res.json({ message: 'Producto Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE producto set ? WHERE id_producto=?', [req.body, id]);
            res.json({ text: 'actualizando producto ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM producto WHERE id_producto = ?', id);
            res.json({ message: 'Juego Eliminado ' });
        });
    }
}
exports.productoController = new ProductoController();
