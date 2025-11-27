const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat"); // Corrected import

const port = 8080;

// Setting the view engine to ejs
app.set("view engine", "ejs"); // Corrected key
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log("Connection is successful");
  } catch (err) {
    console.error("Database connection error:", err);
  }
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
}).catch(err => console.log("Error saving initial chat:", err));

app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
  } catch (err) {
    console.error("Error retrieving chats:", err);
    res.status(500).send("Error retrieving chats");
  }
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newchat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date()
  });

  newchat
    .save()
    .then(() => {
      console.log("Chat saved successfully");
      res.redirect("/chats");
    })
    .catch((err) => {
      console.error("Error saving chat:", err);
      res.status(500).send("Error saving chat");
    });
});

// Route to handle the root path
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
