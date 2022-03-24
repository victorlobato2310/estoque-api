import express from 'express';
import UsuarioController from '../controllers/UsuarioController';
import extractJWT from '../jwt/extractJWT';

const usuarioRouter = express.Router();

usuarioRouter.get('/validar', extractJWT, UsuarioController.validarToken);
usuarioRouter.post('/registrar', extractJWT, UsuarioController.registrar);
usuarioRouter.post('/login', UsuarioController.fazerLogin);
usuarioRouter.get('/', extractJWT, UsuarioController.obterTodosUsuarios);

export default usuarioRouter;
