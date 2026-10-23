const express = require('express');
const router = express();

router.get("/Home", (req, res) => {
    res.send("Pegou home");
});

router.get("/", (req, res) => {
    res.send("pegou")
})

module.exports = router;