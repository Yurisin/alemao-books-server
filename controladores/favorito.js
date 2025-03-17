const { getTodosLivrosFavoritos, insereFavorito, deletaFavoritoPorID } = require("../servicos/favoritos")

function getFavoritos(req, res) {
    try {
        const livros = getTodosLivrosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const idLivro = req.params.id
        insereFavorito(idLivro)
        res.status(201)
        res.send("Livro inserido com sucesso")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaFavoritoPorID(id)
            res.send("Favorito excluído com sucesso")
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
    getFavoritos,
    postFavorito,
    deleteFavorito    
}