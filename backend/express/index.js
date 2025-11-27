const express = require("express");
const app =express();

let port = 8080;
app.listen(port,() =>{
    console.log(`app listen on port ${port}`);
}, );

app.use((req,res) =>{
    console.log("request recived");
    res.end("this is basic response");
});