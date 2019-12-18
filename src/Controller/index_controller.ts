import {Request,Response} from 'express';
import pool from '../routes/database';
class IndexController{
    public index(req:Request,res:Response){
       pool.query('Describe producto');
       res.send('Hello Inicio');
    }
    
}

export const indexController=new IndexController();