import { Schema, model, Model } from 'mongoose';
import { IDefaultModel } from '../interfaces/IDefaultModel';

export interface EstoqueModel extends IDefaultModel {
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    dataDeVencimento?: string;
}

export const EstoqueSchema = new Schema({
    nome: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
        minlength: 1
    },
    descricao: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 1
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    dataDeVencimento: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        required: false,
    }
});

export default model<EstoqueModel>('Estoque', EstoqueSchema) as Model<EstoqueModel>;