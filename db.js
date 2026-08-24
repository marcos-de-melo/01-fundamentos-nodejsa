import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const { HOST, PORT, USER, PASSWORD, DATABASE} = process.env

export const db = await mysql.createConnection({
    host: HOST,
    port: PORT || 3306 ,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
})