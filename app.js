const express = require("express");
const servidor = express();

servidor.get("/", function(req, res){
    res.send("Sejam bem viados na melhor aplicação do BRASIL!");
});

servidor.get("/login", function(req, res){
    res.send("Login da aplicação");
});

servidor.listen(8085, function(){
    console.log("Servidor está no mod O PAI TA YON");
});
    