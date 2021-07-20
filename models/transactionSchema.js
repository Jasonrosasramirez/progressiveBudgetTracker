/* -- bringing in your variables --*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/* -- Creating the schema --*/
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);


/* -- exporting -- */
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction; // will be referenced by api.js 
