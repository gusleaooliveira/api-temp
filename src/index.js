const express = require("express");
const rotaDepoimentos = require("./rotas/Depoimentos");
const app = express();


app.use(rotaDepoimentos);

app.listen(process.env.PORT || 9000, () => { console.log("http://localhost:3000/depoimentos"); });