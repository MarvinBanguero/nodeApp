import { Router } from 'express';
import { cloudinaryController } from '../Controller/cloudinary_controller';



class CloudinaryRouter{
    router:Router=Router();
 
    constructor(){
        this.config();
    }
    config(){
   
    this.router.get('/',cloudinaryController.get);
   
    
    }
}
const cloudinaryRouter= new CloudinaryRouter();
export default cloudinaryRouter;