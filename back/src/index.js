const express = require("express");
const app = express();
const rotas = require("./Rotas");

app.use(express.json());
app.use(rotas);
require = require("./Config/dbConfig");

app.listen(8085);