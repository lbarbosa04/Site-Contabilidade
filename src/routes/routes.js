const express = require('express');
const rotas = express();

rotas.get("/perguntas", (req, res) => {
    res.render("index");
});

module.exports = rotas; 