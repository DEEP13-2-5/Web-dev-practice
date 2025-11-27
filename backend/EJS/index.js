const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("views engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res) =>{
    res.render("home.ejs");
});

app.get("/hello",(req,res) =>{
    res.send("hello");
});

app.get("/ig/:username",(req,res) =>{
     let{username} = req.params;
     const instaData = require("./data.json");
     const data = instaData[username];
    //console.log(username);
    console.log(data);
    res.render("instagram.ejs",{data});   
});

 app.listen(port,() =>{
     console.log(`app listing on port ${port}`);
 });