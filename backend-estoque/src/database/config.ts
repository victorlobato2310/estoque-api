import mongoose, { Mongoose } from 'mongoose';

const DATABASE_CONN = 'mongodb://localhost/db_estoque';

const OPTIONS_MONGOOSE = { 
    autoIndex: true,
    autoCreate: true
};

export const conn = async (): Promise<Mongoose> =>  await mongoose.connect(DATABASE_CONN, OPTIONS_MONGOOSE);

conn().then(() => {
    console.log('Conectado ao Banco de dados com sucesso.');
}).catch( error => {
    console.log('Não foi possível se conectar ao Banco de dados, motivo: ', error);
});