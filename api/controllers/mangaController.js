const mangas = require('../data/mangas.json');

exports.getAllMangas = (req, res) => {
  res.json(mangas);
};

exports.getMangaById = (req, res) => {
  const manga = mangas.find(m => m.id === parseInt(req.params.id));
  if (!manga) return res.status(404).json({ message: 'Manga no encontrado' });
  res.json(manga);
};
