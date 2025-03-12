const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivroPorID, verificaIdExistente } = require('../servico/livros')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        const idLivro = req.body.id
        const existeLivro = verificaIdExistente(idLivro)

        if(existeLivro === false) {
            if(req.body.nome){
                insereLivro(livroNovo)
                res.status(201)
                res.send("Livro inserido com sucesso")
            } else {
                res.status(422)
                res.send("Nome do livro não informado")
            }
        } else {
            res.status(422)
            res.send("ID do livro já existe")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Livro modificado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            excluiLivroPorID(id)
            res.send("Livro excluído com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}