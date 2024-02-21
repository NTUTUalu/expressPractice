const {Router} = require('express');

const router = Router();
const supermarkets = [
    
        {
            store:"wholesaler 1"
        },
        {
            store:"wholesaler 2"
        },
        {
            store:"wholesaler 3"
        },
        {
            store:"wholesaler 4"
        },
    
]
router.get('/supermarkets', (request,response) => {
    response.send(supermarkets);
})

module.exports = router;