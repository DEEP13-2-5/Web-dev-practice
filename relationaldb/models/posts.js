const mongoose = require('mongoose');
const {Schema} =mongoose;

main()
.then(console.log("connection succesfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/randomDemo');
}

const userSchema = new Schema({
    name:String,
    email:String,
    });

const postSchema = new Schema({
Content:String,
likes:Number,
user:[
    {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
],
});

const User =  mongoose.model("User",userSchema)
const Post =  mongoose.model("Post",postSchema)

const addData = async() =>{
    let user = await User.findOne({username:"abc"})
    let post2 = new Post({
        content:"bye bye bye",
        likes:69,
    })
    post2.user = user;
    await post2.save();
}
addData();

const getData = async() =>{
    let result = await Post.findOne({}).populate("user","name")
    console.log(result)
}
getData();