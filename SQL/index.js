const { faker } =  require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path =require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended :true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'newapp',
  password: 'Deep@132',
});

//home page
 app.get("/",(req,res)=>{
  q = `SELECT COUNT(*) FROM user`;
  try{
    connection.query(q,(err, result) => {
      if (err) throw err;
    
    //  res.send("succsess");
  let count = result[0]["COUNT(*)"];
    res.render("home.ejs",{count});
    });
  }catch (err) {
    res.send("some error occurs");
  }
 });
// show user route
 app.get("/user",(req,res) =>{
  let q=`SELECT * FROM USER`;
    try{
      connection.query(q,(err, users) => {
        if (err) throw err;
        // res.send("result")
      res.render("user.ejs",{users});
    })
  }catch(err){
  res.send("some error");
  }
  });
  app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
          if (err) throw err;
          let user = result[0]; 
            res.render("edit.ejs",{user});
        });
    } catch (err) {
        res.send("some error");
    }
});

//update
app.patch("/user/:id",(req,res) =>{
  let { id } = req.params;
  let{ password:formpass , username:newUsername}=req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0]; 
        if(formpass !== user.password){
          res.send("password dont match");
        }else{
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
          connection.query(q2, (err, result) => {
            if (err) throw err;
            res.redirect("/user")
          }); 
        }  
      });
  } catch (err) {
      res.send("some error");
  }
});

let port =8080;

 app.listen(port,() =>{
 console.log(`app is listenningon port ${port}`)
 });
