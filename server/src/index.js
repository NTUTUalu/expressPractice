const express = require("express");

const cookieParser = require('cookie-parser')
// import express from "express";
const session = require('express-session');
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require('./routes/markets');
const app = express();

const PORT = 3001;

app.use(express.json());
// app.use(groceriesRoute);
//when sending url encoded text you use this text
app.use(express.urlencoded())

app.use('/api/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoute);
app.use(cookieParser());

app.use((req,res,next) => {
    console.log(`$(req.method):$(req.url)`);
    next();
})

app.use(session({
    secret: "JVLUVBEVERUEIBCIERBERBVIVBEIVBEUVB",
    resave: false,
    saveUninitialized: false,
}))

app.listen(PORT, () => console.log(`running express server at port: ${PORT}`));
// app.listen(PORT, () => {
//     return console.log(`App is listening to port: ${PORT}`);
//   });
