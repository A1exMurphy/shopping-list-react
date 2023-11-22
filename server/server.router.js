const router = require('express').Router();
const pool = require('./modules/pool.js');





//GET route
router.get('/', (req, res) => {
    console.log('in GET route')
    let queryText = 
        `
        SELECT * FROM "shopping_list"
            ORDER BY "Name" ASC;;
        `
        pool.query(queryText)
            .then((dbresult) => {
        // console.log(dbresult.rows, 'this is the db result.rows');
        res.send(dbresult.rows);
    }).catch(dbError => {
        console.log(`error GET db table`, dbError)
        res.sendStatus(500)
    })
})


//POST route
router.post('/', (req, res) => {
    console.log('in POST route', req.body)
    let newItem = req.body;

    let queryText = 
        `
        INSERT INTO shopping_list ("Name", "Quantity", "Unit")
            VALUES ($1, $2, $3)
        `
        console.log(req.body, `req.body`)

        const sqlValues = [
            newItem.Name, 
            newItem.Quantity,
            newItem.Unit
]

            pool.query(queryText, sqlValues)
            .then((dbResult) => {
                res.sendStatus(201)
            })
            .catch((dbError) => {
                console.log(dbError, `error POST query to db`)
            })
})


//PUT route



//DELETE route



module.exports = router;