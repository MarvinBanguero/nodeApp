import { Request, Response } from 'express';
import pool from '../routes/database';
class ProductoController {
    public async list(req: Request, res: Response) {
        const producto = await pool.query('SELECT * FROM producto', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        res.json(producto);
    }
    public async nroregistros(req: Request, res: Response) {
        const producto = await pool.query('SELECT COUNT(*) FROM producto', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        res.json(producto);
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const producto = await pool.query('SELECT * FROM producto WHERE id_producto=' + req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

        res.json(producto);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO producto set ?', [req.body]);
        res.json({ message: 'Producto Guardado' });
    }

    public async update(req: Request, res: Response) {
        const {id}= req.params;
        await pool.query('UPDATE producto set ? WHERE id_producto=?',[req.body , id]);
        res.json({ text: 'actualizando producto ' + req.params.id });
    }

    public async delete(req: Request, res: Response) {
        const {id}= req.params;
       await pool.query('DELETE FROM producto WHERE id_producto = ?',id);
        res.json({ message: 'Juego Eliminado '});
    }
}

export const productoController = new ProductoController();