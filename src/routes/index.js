const express = require('express');

const rotas = express();

const site = require('./routes')

const port = 8080; 

rotas.listen(port, function () {

    console.log(`Servidor rodando na porta ${port}`);

});

rotas.use(site);