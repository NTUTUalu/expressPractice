const {Router} = require('express');

const router = Router();
const supermarkets = [
    
        {
            id: 32,
            miles: 14,
            store:"wholesaler 1"
        },
        {
            id: 22,
            miles: 12,
            store:"wholesaler 2"
        },
        {
            id: 112,
            miles: 3,
            store:"wholesaler 3"
        },
        {
            id: 12,
            miles: 1,
            store:"wholesaler 4"
        },
    
]
router.get('/supermarkets', (request,response) => {
    // console.log(request.query),
    const {miles} = request.query;
    const parsedMiles = parseInt(miles);
    if(!isNaN(parsedMiles)) {
        const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
        response.send(filteredStores);
    }else 
    response.send(supermarkets);
})

module.exports = router;