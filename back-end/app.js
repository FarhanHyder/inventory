const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv/config');

app.use(bodyParser.json());

// import routes
const inventoryRoutes = require('./routes/inventory');

// middleware for routes
app.use('/inventory', inventoryRoutes);

// routes
app.get('/', (req,res) =>{
    res.send('this is home');
})


// connect to mongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true}, 
    () => console.log('Connected to DB')
    );


app.listen(3000);

