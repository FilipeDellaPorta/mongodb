import { autor } from '../models/Autor.js'

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição da lista de autores`})
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor`})
        }
    }


    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body) //body aqui é o corpo da requisição
            res.status(201).json({ message: 'cadastrado novo autor com sucesso!', autor: novoAutor})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor`})
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json('autor atualizado com sucesso!')
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do autor`})
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndRemove(id)
            res.status(200).json('autor deletado com sucesso!') //200 ou 204 poderia ser
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na deleção do autor`})
        }
    }

}

export default AutorController