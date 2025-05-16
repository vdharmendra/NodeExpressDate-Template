// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.set("view engine", 'ejs');


var items = ["buy food", "cook food", "fat food"];

app.get("/", function(req, res){
    
    // ##### Chap: 1
    // var today = new Date();
    // var currentday = today.getDay();
    // var day = "";
    // console.log(currentday);
    // if(currentday == 6 || currentday == 0){
    //     res.write("<h1>Yay it's the weekend</h1>");
    // }else{
    //     res.sendFile(__dirname+"/index.html");
    // }


    // // ##### Chap: 2
    // // console.log(currentday);
    // // if(currentday == 6 || currentday == 0){
    // //     day = "weekendddd";
    // // }else{
    // //     day = "weekdayyyy";
    // // }
    // // res.render("list", {kindofday: day});


    // // ###### CHAPTER 3
    // switch(currentday){
    //     case 0:
    //     day = "Sunday";
    //     break;
    //     case 1:
    //     day = "Monday";
    //     break;
    //     case 2:
    //     day = "Tuesday";
    //     break;
    //     case 3:
    //     day = "Wedensday";
    //     break;
    //     case 4:
    //     day = "Thursday";
    //     break;
    //     case 5:
    //     day = "Friday";
    //     break;
    //     case 6:
    //     day = "Saturday";
    //     break;
    //     default:
    //         console.log("Error");
    // }
    // res.render("list", {kindofday: day});



    // # Chapter: 4
    // PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
    var today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    var currentday = today.toLocaleDateString('en-US', options);
    res.render("list", {kindofDay: currentday, newlistItems: items});


});

// # Chapter: 4
// POST REQ
app.post("/", function(req, res){
    var item = req.body.addNewItem;
    // console.log(item);
    // ADD NEW ITEM ON EXCITING ITEMS LISTS
    items.push(item);
    // REDIRECTING TO HOME DIR OR PAGE
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server Up and Running 3000");
});