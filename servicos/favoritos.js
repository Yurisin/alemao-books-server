const fs = require('fs')

function getTodosLivrosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorID(id) {
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

  const novaListaDeFavoritos =  favoritos.filter(favorito => favorito.id !== id)

  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
  
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

  const livroInserido = livros.find(livro => livro.id === id)

  const novaListaDeLivrosFavotitos = [...favoritos, livroInserido]

  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavotitos))

}

function verificaFavoritoIdExistente(id) {
  const favoritos = JSON.parse(fs.readFileSync("livros.json"))

  const idExistente = favoritos.some(favorito => favorito.id === id)        

  return idExistente
}

module.exports = {
  getTodosLivrosFavoritos,
  deletaFavoritoPorID,
  insereFavorito
}