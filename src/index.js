const express = require("express");
const rotaDepoimentos = require("./rotas/Depoimentos");
const rotaContatos = require("./rotas/Contatos");
const rotaImagens = require("./rotas/Imagens");
const app = express();


app.use(rotaDepoimentos);
app.use(rotaContatos);
app.use(rotaImagens);

app.listen(process.env.PORT || 5000);
