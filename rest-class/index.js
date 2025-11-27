const express = require("express")
const app = express();
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));

const path = require("path");
const { v4: uuidv4 } = require('uuid');
app.set("views",path.join(__dirname,"/views"));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));

let posts = [
    {
        id: uuidv4(),
        username : "Danger",
        content :"daddys home"
    },
    {
        id :uuidv4(),
        username : "butcher",
        content :"you all welcome"
    },
    {
        id: uuidv4(),
        username : "deep",
        content : "you are disappoitment"
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res) =>{
    let{username,content}=req.body;
    let id =uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
 });

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    post.content= newContent; 
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post})
});

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
    res.send("delete successfully");
});

const port = 8080;

app.listen(port, ()=>{
    console.log("app is listerning ");
});