import express, { Application } from 'express';
import index_routes  from './routes/index_routes';
import productos_routes from './routes/productos_routes';
import morgan from 'morgan';
import cors from 'cors';
import imagenesRouter from './routes/imagenes_routes';
import cloudinaryRouter from './routes/cloudinaryroutes';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
     this.app.set('port',process.env.port || 3000);
     this.app.use(morgan('dev'));
     this.app.use(cors());
     this.app.use(express.json());
     this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void {
        this.app.use('/',index_routes);
        this.app.use('/api/productos',productos_routes.router);
        this.app.use('/api/productosnro',productos_routes.router1);
        this.app.use('/api/imagenes',imagenesRouter.router);
        this.app.use('/api/ultimoimagen',imagenesRouter.router1);
        this.app.use('/api/',cloudinaryRouter.router);
    }

    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('server on port',this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();