const express = require("express");
// import express from "express";

const app = express();

const PORT = 3001;

app.use(express.json());

//when sending url encoded text you use this text
//app.use(express.urlencoded())

app.listen(PORT, () => console.log(`running express server at port: ${PORT}`));
// app.listen(PORT, () => {
//     return console.log(`App is listening to port: ${PORT}`);
//   });

const groceryList = [
    {
        item: "milk",
        quantity: 2,
      },
      {
        item: "cereal",
        quantity: 1,
      },
      {
        item: "milk",
        quantity: 1,
      },
]

app.get("/groceries", (request, response) => {
  response.send(groceryList);
});

app.post("/groceries", (request, response) => {
    console.log(request.body);
    //the line below updates the grocery list so that when we request a new list, using a get request we get an updated list
    groceryList.push(request.body);
    response.send(201);
})

