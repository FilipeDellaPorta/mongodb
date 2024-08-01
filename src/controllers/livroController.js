import livro from '../models/Livro.js'
import { autor } from '../models/Autor.js'

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição da lista de livros`})
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`})
        }
    }

    
    static async cadastrarLivro(req, res) {
        const novoLivro = req.body //body aqui é o corpo da requisição
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroComAutor = { ...novoLivro, autor: { ...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroComAutor)
            res.status(201).json({ message: 'cadastrado novo livro com sucesso!', livro: livroCriado})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json('livro atualizado com sucesso!')
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro`})
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndRemove(id)
            res.status(200).json('livro deletado com sucesso!') //200 ou 204 poderia ser
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na deleção do livro`})
        }
    }

    static async buscarLivrosPorEditora(req, res) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora: editora})
             //editora 1 é a propriedade do objeto Livro e a segunda é a const
             // o javascript tem um padrão onde se chave e valor foram iguais pode deixar somente um deles, poderia ser livro.find({ editora })
             res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca do livro por editora`})
        }
    }

}

export default LivroController
