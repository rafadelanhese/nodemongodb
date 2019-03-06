const express = require('express');
const console = require('console');
const numJucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ urlencoded: false }));

numJucks.configure(path.join('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.set('views', path.join('app', 'views'));

app.use(require('./app/routes'));

app.listen(3000, () => {
  console.log('Servidor iniciado');
});

