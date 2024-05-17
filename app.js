//HANDLEBARS
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');


app.get('/',(req, res) => {
    res.render('home',{
        nombre:'GRUPO NODE',
        titulo:'Curso de Node'
   });
})
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'GRUPO NODE',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'GRUPO NODE',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res)=> {
  res.sendFile(__dirname +'/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


















/*
const express = require('express')
const app = express()
const port = 8080;
app.use(express.static('public'));
//app.get('/', (req, res) => {
//res.send('Home Page')
//})

app.get('/hola-mundo', (req, res)=> {
res.send('Hola Mundo en su respectiva ruta')
})

//app.get('*', (req, res)=> {
//    res.sendFile(__dirname +'/public/404.html');
//})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

app.get('/generic', (req, res) => {
res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});
*/