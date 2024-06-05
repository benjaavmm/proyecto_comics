const express = require('express');
const app = express();
const comicDCRoutes = require('./routes/comicDCRoutes');
const comicMarvelRoutes = require('./routes/comicMarvelRoutes');
const mangaRoutes = require('./routes/mangaRoutes'); 

app.use(express.json());

app.use('/comicsDC', comicDCRoutes);       // Ruta para cómics de DC
app.use('/comicsMarvel', comicMarvelRoutes); // Ruta para cómics de Marvel
app.use('/mangas', mangaRoutes);           // Ruta para mangas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
