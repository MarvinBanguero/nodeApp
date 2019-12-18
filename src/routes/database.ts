import mysql from 'mysql';
import databasekeys from './databasekeys';

const pool= mysql.createPool(databasekeys.database);
pool.getConnection((err,connection)=>{
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
});

export default pool;


