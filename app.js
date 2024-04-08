const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// TODO: required ('hbs')
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// servir contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Arnold lozano',
    descripcion: 'Curso node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic')
})

app.get('/elements', function (req, res) {
  res.render('elements')
})

// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=> {console.log('Listen port ' + port)})