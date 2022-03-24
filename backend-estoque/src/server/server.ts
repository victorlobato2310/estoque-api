import express from 'express';
import { conn } from '../database/config';
import estoqueRouter from '../routes/estoque.routes';
import usuarioRouter from '../routes/usuario.routes';

const app = express();
app.use(express.json());


app.use('/estoque/produtos/api/v1', estoqueRouter);
app.use('/usuarios', usuarioRouter);

app.use(conn);

app.listen(3000, ()=> {
    console.log('Está rodando.');
});