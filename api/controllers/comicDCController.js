const comicsDC = require('../data/comicsDC.json');

exports.getAllComicsDC = (req, res) => {
  res.json(comicsDC);
};

exports.getComicDCById = (req, res) => {
  const comic = comicsDC.find(c => c.id === parseInt(req.params.id));
  if (!comic) return res.status(404).json({ message: 'Cómic no encontrado' });
  res.json(comic);
};
