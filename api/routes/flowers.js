const express = require("express");
const router = express.Router();
const Color = require("../models/Color");
const Flower = require("../models/Flower");

//Return all flower in database
router.get('/', async (req, res)=> {
    const flowers = await Flower.find();
    res.json(flowers);
});

//Add a new flower to database
router.post('/add', async (req, res)=> {
    try {
        const {name, colors, season, scent} = req.body;

        let flower;
        if(req.body.scent) {
            flower = new Flower ({
                name,
                colors,
                season,
                scent,
            })
        }else {
            flower = new Flower ({
                name,
                colors,
                season,
            })
        }
    
        const newFlower = await flower.save();
        res.json(newFlower);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'flower not found' });
    }
})

//Add flower object to a color based on color ID passed in param and vice versa
//Update flower object in flower.js and color.js
router.post("/add/:colorId", async(req,res)=> {

    try {
        const { colorId } = req.params;
        const { name } = req.body;
    
        const color = await Color.findById(colorId);
        const flower = await Flower.findOne({ name })
    
        flower.colors.push(color.name);
        const updatedFlower = await flower.save();
    
        color.flowers.push(flower.name);
        const updatedColor = await color.save();
    
        res.json({ updatedFlower, updatedColor })
    }catch(e){
        console.log(e);
        res.status(500).json({ message: 'flower not found' });
    }
});

module.exports = router;