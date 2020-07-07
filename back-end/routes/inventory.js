const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// get all items
router.get('/', async (req,res) =>{
    try{
        const items = await Item.find();
        res.json(items);
    } catch(err){
        res.json({message:err});
    }
});


// posting new item
router.post('/', async (req,res) => {

    console.log(req.body);
    

    const { name, quantity, quantity_unit, buy_price_per_unit, sell_price_per_unit } = req.body;

    const item = new Item({
        name : name,
        quantity : quantity,
        quantity_unit: quantity_unit,
        buy_price_per_unit: buy_price_per_unit,
        sell_price_per_unit: sell_price_per_unit
    });

    try{
        const savedItem = await item.save();
        res.json(savedItem);
    } catch(err){
        res.json({message : err});
    }

});


// getting item by id
router.get('/:itemID', async(req, res) =>{
    try{
        const item = await Item.findById(req.params.itemID);
        res.json(item);
    }catch (err){
        res.json({message:err});
    }
});

// removing an item by id
router.delete('/:itemID', async (req,res) =>{
    try{
        const removedItem = await Item.remove({_id: req.params.itemID});
        res.json(removedItem);

    }catch(err){
        res.json({message: err})
    }
});

// updating quantity of an item by id
router.patch('/:itemID', async (req,res) => {
    console.log(req.body);
    
    try{
        const updatedItem = await Item.updateOne(
            { _id: req.params.itemID},
            { quantity: req.body.quantity}
        );
        res.json(updatedItem)
    } catch(err){
        res.json({message})
    }
})



module.exports = router;