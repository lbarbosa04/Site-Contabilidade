const express = require('express');

const app = express();

const port = 8080;

const rotas = require('./routes');

rotas.set('view engine', 'ejs');
rotas.use(express.static('public'));

app.use(rotas);

app.listen(port, function () {

    console.log(`Servidor rodando na porta ${port}`); 

});