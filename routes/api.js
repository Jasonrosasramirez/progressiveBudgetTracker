/* -- Requiring variables -- */
const express = require("express"); 
const router = express.Router(); 
const Transaction = require("../models/transactionSchema.js");


/* -- updates to database -- */
router.post("/api/transaction", ({ body }, res) => {
    Transaction.create(body) // creating a new body using the Transaction schema 
    .then(dbTransaction => { // issuing a promise here 
        res.json(dbTransaction);    // displays that body as a json format
    })
    .catch(err => { // if we encounter an error, it would be a missing page. 
        res.status(404).json(err);
    });

}); 





/* -- Receive information from the database -- */
router.get("/api/transaction", (req, res) => {
    Transaction.find({ }).sort({date: -1})
    .then(dbTransaction => { // issuing a promise here 
        res.json(dbTransaction);    // displays that body as a json format
    })
    .catch(err => { // if we encounter an error, it would be a missing page. 
        res.status(404).json(err);
    });

});



/* -- exporting -- */
module.exports = router;