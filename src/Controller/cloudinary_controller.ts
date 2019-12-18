import { Request, Response } from 'express';





class CloudinaryController{
   
    async get(req:Request,res:Response){
        
       /* const img = await cloudinary.resourses  ('', function (err, result, fields) {
            if (err) throw err;
           
            res.json(result);
        });
        res.json(producto);
        console.log("a");*/

    }
    
}
export const cloudinaryController = new CloudinaryController();