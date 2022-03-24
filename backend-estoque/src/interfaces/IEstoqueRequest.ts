export interface IEstoqueRequest {
    id?: string;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    dataDeVencimento: string | undefined;
}