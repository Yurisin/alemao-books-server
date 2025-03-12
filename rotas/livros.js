const {Router } = require('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro');

const router = Router();

/*
Para consultar dados, utiliza-se a ação GET.
Para inserir dados, utiliza-se a ação POST.
Para deletar dados, utiliza-se a ação DELETE.
Para editar dados, utiliza-se a ação PATCH.
*/

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro)

module.exports = router;