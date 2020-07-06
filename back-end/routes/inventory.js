const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', (req,res) =>{
    res.send('this is inventory list');
});

router.post('/', (req,res) => {

    const { name, quantity, quantity_unit, buy_price_per_unit, sell_price_per_unit } = req.body;

    const item = new Item({
        name : name,
        quantity : quantity,
        quantity_unit: quantity_unit,
        buy_price_per_unit: buy_price_per_unit,
        sell_price_per_unit: sell_price_per_unit
    });

    item.save()
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.json({message: err});
        });
});



module.exports = router;