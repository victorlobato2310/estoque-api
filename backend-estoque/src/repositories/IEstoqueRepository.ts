import IEstoqueDTO from "../interfaces/IEstoqueDTO";
import { EstoqueModel } from "../models/Estoque";

export interface IEstoqueRepository {

    salvar( { nome, descricao, preco, quantidade, dataDeVencimento  }: IEstoqueDTO): Promise<EstoqueModel>;

    obterTodos(): Promise<EstoqueModel[]>; 

    obterPorId(id: string ): Promise<EstoqueModel>;

    deletarPorId(id: string ): Promise<EstoqueModel>;
    
    alterar( id: string, nome: string, descricao: string, preco: number, quantidade: number, dataDeVencimento?: string ): Promise<EstoqueModel>;
}