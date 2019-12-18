"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index_routes"));
const productos_routes_1 = __importDefault(require("./routes/productos_routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const imagenes_routes_1 = __importDefault(require("./routes/imagenes_routes"));
const cloudinaryroutes_1 = __importDefault(require("./routes/cloudinaryroutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/api/productos', productos_routes_1.default.router);
        this.app.use('/api/productosnro', productos_routes_1.default.router1);
        this.app.use('/api/imagenes', imagenes_routes_1.default.router);
        this.app.use('/api/ultimoimagen', imagenes_routes_1.default.router1);
        this.app.use('/api/', cloudinaryroutes_1.default.router);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
