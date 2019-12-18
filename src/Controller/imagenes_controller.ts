import { Request, Response } from 'express';
import pool from '../routes/database';


class ImagenesController{
   public async create(req:Request,res:Response):Promise<void>{
       await pool.query('INSERT INTO imagenprod set ?', [req.body]);
       res.json({ message: 'imagen Guardada' });
        
    }
    async delete(req:Request,res:Response){
        const {id}= req.params;
       await pool.query('DELETE FROM imagenprod WHERE id_imagen = ?',id);
        res.json({ message: 'Juego Eliminado '});
    }
    async update(req:Request,res:Response){
        const {id}= req.params;
        await pool.query('UPDATE imagenprod set ? WHERE id_imagen=?',[req.body , id]);
        res.json({ text: 'actualizando producto ' + req.params.id });

    }
    async getOne(req:Request,res:Response){
        const producto = await pool.query('SELECT imagen FROM imagenprod,producto WHERE id_prod=? and id_producto=' + req.params.id,req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

        res.json(producto);

    }
    async getAll(req:Request,res:Response){
        
        const producto = await pool.query('SELECT * FROM imagenprod', function (err, result, fields) {
            if (err) throw err;
           
            res.json(result);
        });
        res.json(producto);

    }
    async getEnd(req:Request,res:Response){
        
        const producto = await pool.query('SELECT * FROM producto order by id_producto desc limit 1 ', function (err, result, fields) {
            if (err) throw err;
           
            res.json(result);
        });
        res.json(producto);
        console.log("a");

    }
    
}
export const imagenesController = new ImagenesController();
