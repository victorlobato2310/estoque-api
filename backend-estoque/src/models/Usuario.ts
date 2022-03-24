import { Schema, model, Model } from 'mongoose';
import { IDefaultModel } from '../interfaces/IDefaultModel';

export interface UsuarioModel extends IDefaultModel {
    usuario: string;
    senha: string;
}

export const UsuarioSchema: Schema = new Schema(
    {
        usuario: { type: String, required: true, unique: true },
        senha: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default model<UsuarioModel>('Usuario', UsuarioSchema) as Model<UsuarioModel>;