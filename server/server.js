// creating a backend API

const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 8080;



//creating an api route where we are going to be fetching the data from

app.get("/api/home", (req, res) => {
    res.json({
        message: "like the page!", people: ["hi", "het", "kii"]
    })
});

// TO run our application we will execute the code below
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
});