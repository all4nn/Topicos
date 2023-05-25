const Cliente = require("../Model/ClienteModel");
const express = require('express');
const app = express();

const path = require("path");
const fs = require("fs");

module.exports ={

async registro (req, res){
    const filePath = path.join(__dirname, "../front/index.html" );

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
        }
        res.set('Content-Type', 'text/html');
        res.send(data);
      });
}

};