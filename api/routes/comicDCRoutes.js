const express = require('express');
const router = express.Router();
const comicDCController = require('../controllers/comicDCController');

router.get('/', comicDCController.getAllComicsDC);
router.get('/:id', comicDCController.getComicDCById);

module.exports = router;
