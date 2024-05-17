require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// Handlebars setup
app.set('view engine', 'hbs'); // para usar Handlebars para Express
hbs.registerPartials(__dirname + '/views/partials'); // para usar parciales

// Rutas
app.get('/', (req, res) => {
  res.render('home', { // estos son los argumentos
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/salidas', (req, res) => {
  res.render('salidas', {
    nombre: 'Armando David Espinoza',
    titulo: 'Curso de Node'
  });
});

// Servir contenido estático
app.use(express.static('public')); // definición de middleware Express. Si 'public' está en otro sitio, especificar path

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});