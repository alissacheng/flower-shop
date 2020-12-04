const express = require("express");
const router = express.Router();
const Color = require("../models/Color");

//Return all flower in database
router.get('/', async (req, res)=> {
    const colors = await Color.find();
    res.json(colors);
});

//Add a new flower to database
router.post('/add', async (req, res)=> {
    const { name, flowers } = req.body
    const newColor = new Color ({
        name,
        flowers,
    })

    const color = await newColor.save();
    res.json(color);
})

module.exports = router;