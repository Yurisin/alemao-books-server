const express = require("express")
const rotaLivro = require("./rotas/livros")
const rotaFavorito = require("./rotas/favoritos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})