import express from 'express';
import { conn } from '../database/config';
import estoqueRouter from '../routes/estoque.routes';
import usuarioRouter from '../routes/usuario.routes';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use('/estoque/produtos/api/v1', estoqueRouter);
app.use('/usuarios', usuarioRouter);

app.use(conn);

const allowedOrigins = ["http://localhost:4200"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.listen(3000, ()=> {
    console.log('Está rodando.');
});