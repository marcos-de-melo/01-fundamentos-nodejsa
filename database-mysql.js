import { randomUUID } from 'node:crypto';
import { db } from './db.js'

export class DatabaseMYSQL{
    async createUser(user){
        const userId = randomUUID();
        const { nome, email, telefone } = user;

        await db.execute(
            'INSERT INTO users (id,nome, email, telefone) VALUES(?, ?, ?,?)',
            [userId, nome, email, telefone]
        )
    }
}