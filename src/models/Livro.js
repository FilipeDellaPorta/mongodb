import mongoose from 'mongoose'
import { autorSchema } from './Autor.js'

const livroSchema = new mongoose.Schema({ //schema = obejto de configuração que define as propriedades de um documento
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false }) 

const livro = mongoose.model('livros', livroSchema) //primeiro parâmetro é a coleção criada no banco de dados e o segundo é o "objeto" Schema

export default livro