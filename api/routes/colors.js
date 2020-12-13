const express = require("express");
const router = express.Router();
const Color = require("../models/Color");

//Return all flower in database
router.get('/', async (req, res)=> {
    try {
        const colors = await Color.find();
        res.json(colors);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
});

//Add a new flower to database
router.post('/add', async (req, res)=> {
    try{
        const { name, flowers } = req.body
        const newColor = new Color ({
            name,
            flowers,
        })

        const color = await newColor.save();
        res.json(color);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
})

module.exports = router;