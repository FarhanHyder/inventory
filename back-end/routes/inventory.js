const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req,res) =>{
    try{
        const items = await Item.find();
        res.json(items);
    } catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {

    const { name, quantity, quantity_unit, buy_price_per_unit, sell_price_per_unit } = req.body;

    const item = new Item({
        name : name,
        quantity : quantity,
        quantity_unit: quantity_unit,
        buy_price_per_unit: buy_price_per_unit,
        sell_price_per_unit: sell_price_per_unit
    });

    // item.save()
    //     .then(data =>{
    //         res.json(data);
    //     })
    //     .catch(err =>{
    //         res.json({message: err});
    //     });

    // another simpler way

    try{
        const savedItem = await item.save();
        res.json(savedItem);
    } catch(err){
        res.json({message : err});
    }

});



module.exports = router;