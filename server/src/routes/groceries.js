const {Router} = require('express');

const router = Router();


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
        item: "beans",
        quantity: 1,
      },
]

router.get("/", (request, response) => {
  response.cookie('visited', true, {
    maxAge:10000,
  });
});

router.get("/groceries", (request, response) => {
  response.cookie('visited', true, {
    maxAge:10000,
  });
  response.send(groceryList);
});

router.get('/groceries/:item', (request,response) => {
    // console.log(request.params.item);
    console.log(request.cookies)
    const {item} = request.params;
    const groceryItem = groceryList.find((g) => g.item === item)
    response.send(groceryItem);
})

router.post("/groceries", (request, response) => {
    console.log(request.body);
    //the line below updates the grocery list so that when we request a new list, using a get request we get an updated list
    groceryList.push(request.body);
    response.send(201);
})

module.exports = router; 