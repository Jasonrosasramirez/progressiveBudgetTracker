/* -- Requiring variables -- */
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 


/* -- Building the new Schema -- */
const schemaTemplate = new Schema({
    // schemas are built as objects 

        description: {
            type: String,
            trim: true, 
            required: "Hello There! What is the transaction for? " 
        }, 

        action: {
            type: Boolean, 
            required: "Is this a withdrawal? "
        },

        amount: {
            type: Number, 
            required: "How much will it be today? " 
        },

        date: {
            type: Date, 
            default: Date.now
        }
    });


/* -- exporting -- */
const transaction = mongoose.model("Transaction", schemaTemplate);
module.exports = transaction; // will be referenced by api.js