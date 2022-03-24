import express from 'express';
import EstoqueController from '../controllers/EstoqueController';
import extractJWT from '../jwt/extractJWT';

const estoqueRouter = express.Router();

estoqueRouter.post('/', extractJWT, EstoqueController.salvar);
estoqueRouter.get('/', extractJWT, EstoqueController.obterTodos);
estoqueRouter.get('/pesquisa',extractJWT, EstoqueController.obterPorId);
estoqueRouter.delete('/', extractJWT, EstoqueController.deletarPorId);
estoqueRouter.put('/', extractJWT, EstoqueController.alterar);

export default estoqueRouter;
