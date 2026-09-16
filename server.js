    //package import
//const express=require("express")  <--commom js
import express from"express";       //<--module js
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';


 //files imports
import connectDB from "./config/db.js ";
 //routes import
import testRoutes from './routes/testRoutes.js'
import authRoutes from "./routes/authRoutes.js"    //For server it shows route is created
import errorMiddleware from "./middlewares/errorMiddleware.js";


//Dot env config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app=express();

//middlewares

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

//routes
// app.use("/",function(req,next){
//     console.log(req.body,req.statusCode,req.method)
//     next();
// })
app.use("/api/v1/test",testRoutes);   //<--import
app.use("/api/v1/auth",authRoutes);

//validation Middleware


//port
const PORT=process.env.PORT || 8000

//listen
app.listen(PORT,()=>{
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
        .bgMagenta.bgCyan)
});