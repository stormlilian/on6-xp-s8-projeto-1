const express = require("express")
const router = express.Router()
const controller = require("../controller/musicasController")

router.get("/musicas", controller.getMusicas)
router.get("/musicas/:id", controller.getMusicasbyId)
router.get("/artistas", controller.getArtistas)

module.exports = router

