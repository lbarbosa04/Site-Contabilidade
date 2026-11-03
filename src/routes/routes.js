const express = require('express');
const rotas = express.Router();
const perguntas = require('../../database/perguntas');

rotas.get("/perguntas", (req, res) => {
    res.render("index");
});

rotas.post('/salvarPerguntas', (req, res) => {

    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    perguntas.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect('/perguntas');
    });
});

module.exports = rotas;