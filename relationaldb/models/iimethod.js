// store the reference(pointer) to the child document inside
const mongoose = require('mongoose');
const {Schema} =mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/randomDemo');
}

const orderSchema = new Schema({
item:String,
price:Number,
});

const CustomerSchema = new Schema({
name:String,
orders:[
    {
        type: Schema.Types.ObjectId,
        ref:"Order",
    },
],
});

// CustomerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre middleware")
// });

CustomerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id:{$in:Customer.orders}})
        console.log(res)
    }
});
const Order =  mongoose.model("Order",orderSchema)
const Customer =  mongoose.model("Customer",CustomerSchema)

 const findCustomer =async() =>{
let result = await Customer.find({}).populate("orders");
 console.log(result)
 }

const addCust = async() =>{
let newCust = new Customer({
name:"wolverin"
});

let newOrder = new Order({
item:"pizza",
price:250
});

newCust.orders.push(newOrder);

await newOrder.save();
await newCust.save();
console.log(" added new customer");   
}
const delCust = async() =>{
    let data = await Customer.findByIdAndDelete("66c0c279f6a5bde4223444db");
    console.log(data);
}
delCust();
// const addOrders = async() =>{
//    let res = await Order.insertMany([
//     {item:"chips",price:120},
//     {item:"choco",price:125},
//     {item:"frenchfry",price:130},
//     {item:"nachos",price:120}
//     ]);
//     console.log(res);
// }
// addOrders();

//     let cust1 = new Customer({
//         name:"deadpool",
//     });
//     let order1 = await Order.findOne({item:"chips"});
//     let order2 = await Order.findOne({item:"choco"});

// cust1.orders.push(order1);
// cust1.orders.push(order2);

// let result = await cust1.save();
// console.log(result)





