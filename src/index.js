const express = require("express");
const rotaDepoimentos = require("./rotas/Depoimentos");
const rotaContatos = require("./rotas/Contatos");
const app = express();


app.use(rotaDepoimentos);
app.use(rotaContatos);

app.listen(process.env.PORT || 5000);
