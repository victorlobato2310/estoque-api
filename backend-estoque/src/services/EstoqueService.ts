import { IEstoqueRequest } from "../interfaces/IEstoqueRequest";
import { EstoqueModel } from "../models/Estoque";
import EstoqueRepository from "../repositories/EstoqueRepository";

export default class EstoqueService {
    
    constructor(private _estoqueRepository: EstoqueRepository){}

    async salvar({ nome, descricao, preco, quantidade, dataDeVencimento  }: IEstoqueRequest): Promise<EstoqueModel>{
    
        return await this._estoqueRepository.salvar({ nome, descricao, preco, quantidade, dataDeVencimento });
    }

    async obterTodos(): Promise<EstoqueModel[]> {

        return await this._estoqueRepository.obterTodos();
    }

    async obterPorId(id: string): Promise<EstoqueModel> {

        return await this._estoqueRepository.obterPorId(id);
    }

    async deletarPorId(id: string): Promise<EstoqueModel> {

        return await this._estoqueRepository.deletarPorId(id);
    }

    async alterar({ id, nome, descricao, preco, quantidade, dataDeVencimento  }: IEstoqueRequest): Promise<EstoqueModel> {

        return await this._estoqueRepository.alterar( id, nome, descricao, preco, quantidade, dataDeVencimento );
    }

}