const express = require('express');
const rotas = express.Router();

rotas.get("/perguntas", (req, res) => {
    res.render("index");
});

rotas.post('/salvarPerguntas', (req, res) => {

    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    res.send(`Formulario enviado! Titulo: ${titulo} e descrição: ${descricao}`)
})

module.exports = rotas;