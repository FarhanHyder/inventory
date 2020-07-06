const express = require('express');

const app = express();


// routes
app.get('/', (req,res) =>{
    res.send('this is home');
})


app.listen(3000);

