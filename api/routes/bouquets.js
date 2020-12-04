// const express = require("express");
// const router = express.Router();
const Bouquet = require("../models/Bouquet");

// router.get('/', async (req, res)=> {
//     const bouquets = await Bouquet.find();
//     res.json(bouquets);
// });

module.exports = {
    //GET bouquets
    listBouquets: (req, res) => {
        Bouquet.find().then(records => res.send(records));
    },
    //create bouquet
    createBouquet: (req, res) => {
        const bouquet = new Bouquet(req.body);
        bouquet.save()
        .then(()=> res.sendStatus(200))
        .catch((error)=> res.sendStatus(500));
        //add error message above
    },
    //add item to existing bouquet
    editBouquet: (req, res) => {
        if (!req.params.bouquetId) {
            res.status(400).json({message: "please select a bouquet"})
        }

        //find item and add to bouquet
    }
}