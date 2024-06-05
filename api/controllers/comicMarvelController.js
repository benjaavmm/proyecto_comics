const comicsMarvel = require('../data/comicsMarvel.json');

exports.getAllComicsMarvel = (req, res) => {
  res.json(comicsMarvel);
};

exports.getComicMarvelById = (req, res) => {
  const comic = comicsMarvel.find(c => c.id === parseInt(req.params.id));
  if (!comic) return res.status(404).json({ message: 'Cómic no encontrado' });
  res.json(comic);
};
