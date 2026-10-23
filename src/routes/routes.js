const express = require('express');
const rotas = express();

rotas.get("/home", (req, res) => {
    res.render("index");
});

module.exports = rotas; 