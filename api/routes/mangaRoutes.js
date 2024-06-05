const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/mangaController');

router.get('/', mangaController.getAllMangas);
router.get('/:id', mangaController.getMangaById);

module.exports = router;
