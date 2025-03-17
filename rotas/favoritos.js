const {Router } = require('express');
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');

const router = Router();

router.get("/", getFavoritos)

router.get("/:id", postFavorito)

router.get("/:id", deleteFavorito)

module.exports = router