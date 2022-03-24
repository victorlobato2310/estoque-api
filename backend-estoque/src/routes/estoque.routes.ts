import express from 'express';
import EstoqueController from '../controllers/EstoqueController';

const estoqueRouter = express.Router();

estoqueRouter.post('/', EstoqueController.salvar);
estoqueRouter.get('/', EstoqueController.obterTodos);
estoqueRouter.get('/pesquisa', EstoqueController.obterPorId);
estoqueRouter.delete('/', EstoqueController.deletarPorId);
estoqueRouter.put('/', EstoqueController.alterar);

export default estoqueRouter;
