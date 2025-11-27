const mongoose = require('mongoose');

main().catch(err => console.log(err));

main()
    .then(()=>{
        console.log("connection from ");
    })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}