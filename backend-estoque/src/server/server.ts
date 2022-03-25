import express from 'express';
import { conn } from '../database/config';
import estoqueRouter from '../routes/estoque.routes';
import usuarioRouter from '../routes/usuario.routes';
import cors from 'cors';

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:4200"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use('/estoque/api/v1/produtos', estoqueRouter);
app.use('/estoque/api/v1/usuarios', usuarioRouter);

app.use(conn);

app.listen(3000, ()=> {
    console.log('Está rodando.');
});