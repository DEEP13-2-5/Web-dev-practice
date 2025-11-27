const mongoose = require('mongoose');
const Chat = require("./models/chat"); 

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log("Connection is successful");
  }
  main().catch(err => console.log(err));

  let Allchats =[
    { 
    from: "Danger",
    to: "Butcher", // Corrected typo
    msg: "You are all welcome",
    created_at: new Date()
  },
  { // Corrected model instantiation
    from: "buthcher",
    to: "huigue", // Corrected typo
    msg: "Oye",
    created_at: new Date()
  },
  { // Corrected model instantiation
    from: "cr7",
    to: "messi", // Corrected typo
    msg: "suiii",
    created_at: new Date()
  },
  { // Corrected model instantiation
    from: "soilder boy",
    to: "captain america", // Corrected typo
    msg: "You are not me",
    created_at: new Date()
  },
  ];

  Chat.insertMany(Allchats);