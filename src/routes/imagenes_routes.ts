import { Router } from 'express';
import { imagenesController } from '../Controller/imagenes_controller';



class ImagenesRouter{
    router:Router=Router();
    router1:Router=Router();
    constructor(){
        this.config();
    }
    config(){
    this.router.post('/',imagenesController.create);
    this.router.put('/:id',imagenesController.delete);
    this.router.get('/',imagenesController.getAll);
    this.router.get('/:id',imagenesController.getOne);
    this.router1.get('/',imagenesController.getEnd);
    this.router.delete('/:id',imagenesController.delete);
    
    }
}
const imagenesRouter= new ImagenesRouter();
export default imagenesRouter;