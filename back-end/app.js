const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


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

