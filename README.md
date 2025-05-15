# 🌐 NodeExpressDate
Tagline: "A date-driven Node.js API using Express and conditional logic."

### 📘 Description
NodeExpressDate is a simple yet effective Node.js project that demonstrates how to handle HTTP requests using Express and body-parser, with dynamic control flow based on the current Date and time.

Ideal for beginners or those exploring time-based logic in APIs, this project uses JavaScript’s Date object with if/else statements to deliver different responses depending on the system date or time.

#### 🚀 Features
- Built with Node.js and Express
- Parses incoming request bodies with body-parser
- Uses JavaScript’s Date object to implement if/else logic
- Time-based or day-based conditional API responses
- Easily extendable for scheduling, logging, or cron-style behavior

#### 📦 Technologies Used
- Node.js
- Express.js
- body-parser
- JavaScript (ES6)

#### 🛠️ Example Use Case
```bash
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

```
#### 📁 Sample Folder Structure
NodeExpressDate/
├── node_modules/
├── app.js
├── package.json
└── README.md