import express from 'express';
import { conn } from '../database/config';
import estoqueRouter from '../routes/estoque.routes';

const app = express();
app.use(express.json());

app.use(estoqueRouter);
app.use(conn);

app.listen(3000, ()=> {
    console.log('Está rodando.');
});