const fs = require('fs')

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const livroFiltrado = livros.filter(livro => livro.id === id) [0]

  return livroFiltrado
}

function insereLivro(livroNovo){
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const novaListaDeLivros = [...livros, livroNovo]

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}
    //livrosAtuais[indiceModificado] -> {id: "2", nome: "livro2" } -- Vai buscar o livro que tem o id igual ao id passado e carregar o objeto
    //modificacoes -> {nome: "Estoicismo"} -- Vai pegar o que foi passado como parâmetro e alterar no objeto, substituindo o valor antigo 

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function excluiLivroPorID(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const novaListaDeLivros = livros.filter(livro => livro.id !== id)

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function verificaIdExistente(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const idExistente = livros.some(livro => livro.id === id)        

  return idExistente    
}



module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  excluiLivroPorID,
  verificaIdExistente
}