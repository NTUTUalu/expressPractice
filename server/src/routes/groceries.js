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

// router.get("/", (request, response) => {
//   response.cookie('visited', true, {
//     maxAge:10000,
//   });
// });

router.get("/", (request, response) => {
  response.cookie('visited', true, {
    maxAge:10000,
  });
  response.send(groceryList);
});

router.get('/:item', (request,response) => {
    console.log(request.cookies);
    // console.log(request.cookies)
    const {item} = request.params;
    const groceryItem = groceryList.find((g) => g.item === item)
    response.send(groceryItem);
})

router.post("/", (request, response) => {
    console.log(request.body);
    //the line below updates the grocery list so that when we request a new list, using a get request we get an updated list
    groceryList.push(request.body);
    response.send(201);
});

// router.get('/shopping/cart', (request, response) => {
//  const {cart} = request.session;

//  if(!cart) {
//   response.send('you have no cart session');
//  }else {
//   response.send(cart);
//  }
// })

// router.post('/shopping/cart/item', (request, response) => {
//   const {item, quantity} = request.body;
//   const cartItem = {item, quantity};

//   // console.log(cartItem);
//   // console.log(request.session)
//   // the problm with the session is that cart is undefined we cannot desrtucture it
//   const {cart} = request.session;
//   if(cart) {
//     request.session.cart.items.push(cartItem);
//   }else {
//     request.session.cart ={
//       items: [cartItem]
//     }
//   }
//   response.send(201)
// })

module.exports = router; 