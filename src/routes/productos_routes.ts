import {Router} from 'express';
import {productoController} from '../Controller/productos_controller';
class ProductoRouter{

    public router:Router = Router();
    router1:Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',productoController.list);
        this.router.get('/:id',productoController.getOne);
        this.router1.get('/', productoController.nroregistros);
        this.router.post('/',productoController.create);
        this.router.put('/:id',productoController.update);
        this.router.delete('/:id',productoController.delete);
    }
}
const productoRouter=new ProductoRouter();
export default productoRouter;

