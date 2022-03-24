export default interface IEstoqueDTO {
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    dataDeVencimento?: string;
}