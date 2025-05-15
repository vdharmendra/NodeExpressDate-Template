// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var currentday = today.getDay();
    var day = "";

    // ##### Chap: 1
    // console.log(currentday);
    // if(currentday == 6 || currentday == 0){
    //     res.write("<h1>Yay it's the weekend</h1>");
    // }else{
    //     res.sendFile(__dirname+"/index.html");
    // }


    // ##### Chap: 2
    console.log(currentday);
    if(currentday == 6 || currentday == 0){
        day = "weekendddd";
    }else{
        day = "weekdayyyy";
    }
    res.render("list", {kindofday: day});
    
});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});