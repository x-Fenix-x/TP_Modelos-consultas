require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = 3001;

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
