import express from 'express' //importando a biblioteca express
import conectaNaDataBase from './config/dbConnect.js'
import routes from './routes/index.js'

const conexao = await conectaNaDataBase()

conexao.on('error', (erro) => {
    console.error('erro de conexão', erro)
})

conexao.once('open', () => {
    console.log('conectado com o banco de dados com sucesso')
})

const app = express() //executando a biblioteca express e enviando para dentro da variável app
routes(app)


export default app
