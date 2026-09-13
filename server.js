//import
//const express=require("express")  <--commom js
import express from"express";       //<--module js
import dotenv from 'dotenv';
import colors from 'colors';

//Dot env config
dotenv.config();


//rest object
const app=express();

//routes
app.get("/",(req,res)=>{
    return res.send("Hello form homepage");
});

//port
const PORT=process.env.PORT || 8000

//listen
app.listen(PORT,()=>{
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
        .bgMagenta.bgCyan)
});