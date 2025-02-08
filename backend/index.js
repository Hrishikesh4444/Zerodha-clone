require("dotenv").config();
const HoldingsModel=require("./model/holdingsModel");
const PositionsModel=require("./model/positionsModel");
const OrdersModel=require("./model/ordersModel");
const User =require("./model/UsersModel");
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const { createSecretToken } = require("./utils/SecretToken");
const bcrypt = require("bcryptjs");

const PORT=process.env.PORT || 3000;
const url=process.env.MONGO_URL;
const app=express();

app.use(cors({
    origin: true, // Reflects the request's origin dynamically
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true // Allows cookies and authentication headers
}));

app.use(express.json());


app.use(express.urlencoded({extended: true}));
// app.get("/add",(req,res)=>{
//     let positions=[
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];

//       positions.forEach((item)=>{
//         let newPositions=new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newPositions.save();
//       });
//       res.send("Done!");
// });



app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    
    res.json(allHoldings);
});

app.get("/allOrders",async(req,res)=>{
    let allHoldings=await OrdersModel.find({});
    
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
   
    res.json(allPositions);
});

app.post("/signup",async(req,res,next)=>{
    try{
        const {email,password,username,createdAt}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.json({message: "User already exits"});
        }

        const user=await User.create({
            email,
            password,
            username,
            createdAt,
        });
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    }
    catch (error) {
        console.error(error);
    }
});
app.post("/login",async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.json({message: "All fields are required"});
        }
        const user =await User.findOne({email});
        if(!user){
            return res.json({message: "Incorrect password or email"});
        }
        const auth=await bcrypt.compare(password,user.password);
        if(!auth){
            return res.json({message: "Incorrect password or email"});
        }
        const token=createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            domain: "https://zerodha-clone-s5ji.onrender.com",
        });
        
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
    } catch (error) {
        console.error(error);
    }
});
app.post("/logout", (req, res) => {
    res.cookie("token", "", {
        withCredentials: true,
        httpOnly: false,
        expires: new Date(0),
    });
    res.status(200).json({ message: "User logged out successfully", success: true });
});

app.post("/newOrder",async(req,res)=>{
    let newOrder=new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        date: Date.now(),
    });

    let newHolding=new HoldingsModel({
        name: req.body.name,
        qty: req.body.qty,
        avg: req.body.qty,
        price: req.body.price,
        net: "+0.58%",
        day: "+2.99%",
    })
    await newOrder.save();
    await newHolding.save();
    res.send("Order saved");
});

app.post("/sellOrder",async(req,res)=>{
    let newOrder=new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        date: Date.now(),
    });

    await newOrder.save();

    res.send("Order saved");
});

app.listen(PORT,()=>{
    console.log("Listening on port 3000");
    mongoose.connect(url);
    console.log("DB connected");
});
