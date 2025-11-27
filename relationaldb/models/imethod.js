// store the child document inside parent 
const mongoose = require('mongoose');
const {Schema} =mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/randomDemo');
}

const userSchema = new Schema({
username:String,
addresses:[
{
    _id:false,
    location: String,
    city: String
},
],
});

const User= mongoose.model("User",userSchema);

const addUsers =async() =>{
    let user1 = new User({
        username:"deadpool",
        addresses:[
            {
                location:"peakpeker",
                city:"ohio",
            },
        ],
    });
   user1.addresses.push({location:"p32 wallstreet",city:"America"});
   let result = await user1.save();
   console.log(result); 
    }

addUsers();