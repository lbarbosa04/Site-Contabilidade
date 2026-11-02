const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

const rotas = require('./routes');

app.set('view engine', 'ejs'); // Informo ao express que estou utilizando o EJS
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false})); //body-parser
app.use(bodyParser.json());

app.use(rotas);

app.listen(port, function () {

    console.log(`Servidor rodando na porta ${port}`); 

});