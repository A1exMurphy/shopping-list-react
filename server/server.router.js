const router = require('express').Router();
const pool = require('./modules/pool.js');





//GET route
router.get('/', (req, res) => {
    let queryText = 
        `
        SELECT * FROM "shopping_list"
            ORDER BY "id";
        `
   .then((dbresult) => {
        console.log(dbresult.rows, 'this is the db result.rows');
        res.send(dbresult.rows);
    }).catch(dbError => {
        console.log(`error GET db table`, dbError)
        res.sendStatus(500)
    })
})


//POST route



//PUT route



//DELETE route



module.exports = router;