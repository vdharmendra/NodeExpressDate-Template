# 🌐 NodeExpressDate
Tagline: "A date-driven Node.js API using Express, EJS, and conditional logic."

## 📘 Description
NodeExpressDate is a simple and educational Node.js project that demonstrates how to handle HTTP requests using Express, body-parser, and EJS templates, with dynamic control flow based on the current Date and time.

Perfect for beginners or developers experimenting with server-side rendering, this app uses both if/else and switch statements to generate different outputs depending on the current date or time. It also showcases how to embed JavaScript logic directly inside EJS views.

#### 🚀 Features
- Built with Node.js and Express
- Parses incoming request bodies with body-parser
- Uses EJS for rendering dynamic views
- Implements date/time logic using JavaScript’s Date object and if/else
- Clean, modular structure — easy to extend
- Demonstrates how to run JavaScript logic directly in EJS templates



#### 📦 Technologies Used
- Node.js
- Express.js
- body-parser
- EJS (Embedded JavaScript Templates)
- JavaScript (ES6)

#### 📁 Sample Folder Structure

NodeExpressDate/
├── node_modules/
├── views/
│   └── index.ejs
├── app.js
├── package.json
└── README.md



#### 🛠️ Example Use Case
```bash
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

```
LISTS.EJS FILES
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeExpressDate Template</title>

</head>
<body>
    <h1>it's a <%= kindofday %></h1>
    <p>why are you not work</p>
</body>
</html>
```
#### 📁 Sample Folder Structure
```bash
NodeExpressDate/
├── node_modules/
├── app.js
├── package.json
└── README.md
```