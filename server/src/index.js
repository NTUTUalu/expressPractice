const express = require("express");
// import express from "express";
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require('./routes/markets');
const app = express();

const PORT = 3001;

app.use(express.json());
// app.use(groceriesRoute);
//when sending url encoded text you use this text
//app.use(express.urlencoded())

app.use('/api', groceriesRoute);
app.use('/api', marketsRoute);

app.listen(PORT, () => console.log(`running express server at port: ${PORT}`));
// app.listen(PORT, () => {
//     return console.log(`App is listening to port: ${PORT}`);
//   });
