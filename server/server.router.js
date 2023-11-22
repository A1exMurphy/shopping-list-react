const router = require('express').Router();
const pool = require('./modules/pool.js');





//GET route
router.get('/', (req, res) => {
    let queryText = 
        `
        SELECT * FROM "shopping_list"
            ORDER BY "id";
        `
})


//POST route



//PUT route



//DELETE route



module.exports = router;