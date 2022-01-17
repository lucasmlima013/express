const express = require("express"); //importando o express
const app = express(); //iniciando express na constante app

app.get("/", function(req, res){
   res.send("Bem vindo ao site!!!!");
});

app.listen(4000.,function(erro){
    if(erro){
        console.log("Erro!");
    }else{
        console.log("Servidor iniciado com sucesso!!");
    }

})

