import express from 'express';
import EstoqueController from '../controllers/EstoqueController';

const estoqueRouter = express.Router();

estoqueRouter.post('/estoque/produtos/api/v1', EstoqueController.salvar);
estoqueRouter.get('/estoque/produtos/api/v1', EstoqueController.obterTodos);
estoqueRouter.get('/estoque/produtos/api/v1/pesquisa', EstoqueController.obterPorId);
estoqueRouter.delete('/estoque/produtos/api/v1/', EstoqueController.deletarPorId);
estoqueRouter.put('/estoque/produtos/api/v1/', EstoqueController.alterar);

export default estoqueRouter;
