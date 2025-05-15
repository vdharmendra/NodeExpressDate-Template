// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date();
    var currentday = today.getDay();

    // console.log(currentday);
    if(currentday == 6 || currentday == 0){
        res.write("<h1>Yay it's the weekend</h1>");
    }else{
        res.sendFile(__dirname+"/index.html");
    }
    
});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});