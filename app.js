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
    // console.log(currentday);
    // if(currentday == 6 || currentday == 0){
    //     day = "weekendddd";
    // }else{
    //     day = "weekdayyyy";
    // }
    // res.render("list", {kindofday: day});


    // ###### CHAPTER 3
    switch(currentday){
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wedensday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
        default:
            console.log("Error");
    }
    res.render("list", {kindofday: day});
});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});