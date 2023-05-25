const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");
const VendaControler = require("./Controller/VendaController")

rotas.get('/BancoC',ClienteControler.read);
rotas.post('/BancoC',ClienteControler.create);
rotas.delete('/BancoC/:id',ClienteControler.delete);
rotas.post('/BancoC/:id',ClienteControler.update);

rotas.get('/BancoV',VendaControler.read);
rotas.post('/BancoV', VendaControler.create);
rotas.delete('/BancoV/:id',VendaControler.delete);
rotas.post('/BancoV/:id',VendaControler.update);

rotas.get('./front')
module.exports = rotas;