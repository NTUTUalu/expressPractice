const express = require("express");
// import express from "express";

const app = express();

const PORT = 3001;

app.listen(PORT, () => console.log(`running express server at port: ${PORT}`));
// app.listen(PORT, () => {
//     return console.log(`App is listening to port: ${PORT}`);
//   });