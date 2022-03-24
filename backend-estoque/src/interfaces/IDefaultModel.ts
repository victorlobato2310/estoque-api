import { Document } from 'mongoose';

export interface IDefaultModel extends Document {
    created_at: Date;
    updated_at: Date | undefined;
}