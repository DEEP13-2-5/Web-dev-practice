const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat"); // Corrected import
const methodOverride =require("method-override");

const port = 8080;

// Setting the view engine to ejs
app.set("view engine", "ejs"); // Corrected key
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));
// Connect to MongoDB
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
console.log("Connection is successful");
}
main().catch(err => console.log(err));

// Creating and saving a chat document
let chat1 = new Chat({ // Corrected model instantiation
  from: "Danger",
  to: "Butcher", // Corrected typo
  msg: "You are all welcome",
  created_at: new Date()
});

chat1.save().then(res => {
  console.log(res);
}).catch(err => console.log(err));

app.get("/chats",async(req,res) => {
let chats = await Chat.find();
console.log(chats);
res.render("index.ejs",{chats});
});



app.get("/chats/new",(req,res) =>{
  res.render("new.ejs")
});

app.post("/chats", (req, res) => {
  let { from,to,msg} = req.body;
  let newchat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date()
  });

  newchat
    .save()
    .then(() => {
      console.log("working");
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving chat");
    });
});

// edit
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
});

// updateroute
app.put("/chats/:id",async(req,res) =>{
    let{id} =req.params;
    let{msg : newMsg} = req.body;
    let Updatedchat = await Chat.findByIdAndUpdate(
        id,
        {msg :newMsg},
        { runValidators:true, new:true } 
    );
    res.redirect("/chats");
});

// Route to handle the root path
app.get("/", (req, res) => {
res.send("Hello");
});
//destroy
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            return res.status(404).send('Chat not found');
        }
        console.log(deletedChat);
        res.redirect("/chats");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});  
