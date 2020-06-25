const express = require("express");
const rotaDepoimentos = require("./rotas/Depoimentos");
const app = express();


app.use(rotaDepoimentos);

app.listen(process.env.PORT || 3000);
