/* -- Basic imports -- */
const express = require("express"); 
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000; // very important to include the process.env.PORT to allow new sessions 
const app = express(); 


/* -- utilizing the app -- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


/* -- connection with mongo atlas -- */
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pwabud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}); 


/* -- routes -- */
app.use(require("./routes/api.js"));


/* -- Listing on Port 4000 -- */
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // displaying the variable port information. 
});