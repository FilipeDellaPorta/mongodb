import mongoose, { mongo } from 'mongoose' //mongoose é a biblioteca que faz a conexão com mongodb

async function conectaNaDataBase() { //como esta função fará a conexão, precisará ser assíncrona
    mongoose.connect(process.env.DB_CONNECTION_STRING) //variável de ambiente para proteger informações sensíveis
    return mongoose.connection
}

export default conectaNaDataBase

