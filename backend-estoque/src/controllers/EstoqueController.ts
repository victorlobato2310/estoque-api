import { Request, Response } from "express";
import EstoqueRepository from "../repositories/EstoqueRepository";
import EstoqueService from "../services/EstoqueService";

class EstoqueController {

    async salvar(request: Request, response: Response) {
            
        const { nome, descricao, preco, quantidade, dataDeVencimento } = request.body;
        
        const estoqueRepository = new EstoqueRepository();

        const estoqueService = new EstoqueService(estoqueRepository);
    
        try {
            const produto = await estoqueService.salvar({ nome, descricao, preco, quantidade, dataDeVencimento });

            return response.status(201).json({
                message: 'O produto foi cadastrado.',
                produto: produto
            });
        } catch (error) {
            return response.status(400).json({
                message: 'Não foi possivel executar a ação.',
                error: error.message
            });
        }
    }

    async obterTodos(request: Request, response: Response) {

        const estoqueRepository = new EstoqueRepository();

        const estoqueService = new EstoqueService(estoqueRepository);

        const produtosEstoque = await estoqueService.obterTodos();
            
        return response.status(200).json(produtosEstoque);
    }

    async obterPorId(request: Request, response: Response) {

        const { id } = request.query;

        const estoqueRepository = new EstoqueRepository();

        const estoqueService = new EstoqueService(estoqueRepository);
    
        try {
            const produto = await estoqueService.obterPorId(id as string);
            
            return response.status(200).json(produto);

        } catch (error) {
            return response.status(400).json({
                message: 'Não foi possivel executar a ação.',
                error: error.message
            });
        }
    }

    async deletarPorId(request: Request, response: Response) {
        const { id } = request.query;

        const estoqueRepository = new EstoqueRepository();

        const estoqueService = new EstoqueService(estoqueRepository);

        try {
            const produto = await estoqueService.deletarPorId(id as string);
            
            return response.status(200).json({
                message: 'Item deletado com sucesso.',
                produto: produto
            });

        } catch (error) {
            return response.status(400).json({
                message: 'Não foi possivel executar a ação.',
                error: error.message
            });
        }
    }

    async alterar(request: Request, response: Response) {
        const {  id, nome, descricao, preco, quantidade, dataDeVencimento } = request.body;
        
        const estoqueRepository = new EstoqueRepository();

        const estoqueService = new EstoqueService(estoqueRepository);
        
        try {
            
            const produtoAtualizado = await estoqueService.alterar({ id, nome, descricao, preco, quantidade, dataDeVencimento });
        
            return response.status(200).json({
                message: 'Item atualizado com sucesso.',
                produto: produtoAtualizado
            });

        } catch (error) {
            return response.status(400).json({
                message: 'Não foi possivel executar a ação.',
                error: error.message
            });
        }
    }
}

export default new EstoqueController();