import Estoque, { EstoqueModel } from "../models/Estoque";
import IEstoqueDTO from '../interfaces/IEstoqueDTO';
import { IEstoqueRepository } from "./IEstoqueRepository";

export default class EstoqueRepository implements IEstoqueRepository {
    
    constructor(){}

    async salvar( { nome, descricao, preco, quantidade, dataDeVencimento  }: IEstoqueDTO): Promise<EstoqueModel>{
        const estoque = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            dataDeVencimento: dataDeVencimento,
            created_at: Date.now(),
            updated_at: undefined
        };

        return await Estoque.create(estoque);
    }

    async obterTodos(): Promise<EstoqueModel[]> {
        return Estoque.find({});
    } 

    async obterPorId(id: string): Promise<EstoqueModel> {
        return await Estoque.findById(id);
    }

    async deletarPorId(id: string ): Promise<EstoqueModel> {
       return await Estoque.findByIdAndRemove(id);
    }

    async alterar( id: string, nome: string, descricao: string, preco: number, quantidade: number, dataDeVencimento?: string ): Promise<EstoqueModel> {
        return await Estoque.findByIdAndUpdate(
            { "_id" : id },
            {
                nome: nome,
                descricao: descricao,
                preco: preco,
                quantidade: quantidade,
                dataDeVencimento: dataDeVencimento,
                update_at: new Date(),
            },
            { new: true }
        );
    }
}
