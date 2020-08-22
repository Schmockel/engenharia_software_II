const express = require('express');
const server = express();

server.get('/', function(request, response){
    response.send('<h1> ainda funcionando</h1>');
})



server.listen(3333, function(){
  console.log("tudo funcionando");
});