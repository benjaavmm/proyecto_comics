const express = require('express');
const router = express.Router();
const comicMarvelController = require('../controllers/comicMarvelController');

router.get('/', comicMarvelController.getAllComicsMarvel);
router.get('/:id', comicMarvelController.getComicMarvelById);

module.exports = router;
