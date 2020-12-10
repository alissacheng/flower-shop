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

    //GET bouquets
    listBouquetItems: (req, res) => {
        if (!req.params.bouquetId) {
            res.status(400).json({message: "please select a bouquet"})
        }else {

            try{
                const bouquetId = req.params.bouquetId;
                Bouquet.findById(bouquetId).then(records => res.send(records.items));
            }catch(err){
                console.log(err);
                res.status(500).json({message: 'internal server error'});
            }
        }
    },
    //create bouquet
    createBouquet: (req, res) => {
        const bouquet = new Bouquet(req.body);
        bouquet.save()
        .then(()=> res.json(bouquet))
        .catch((error)=> res.sendStatus(500));
        //add error message above
    },
    //add item to existing bouquet
    editBouquet: (req, res) => {
        if (!req.params.bouquetId) {
            res.status(400).json({message: "please select a bouquet"})
        }else {
            const item = req.body;
            console.log("item is", item)
            const bouquetId = req.params.bouquetId;
            //push into bouquet object
            Bouquet.findById(bouquetId)
                .exec(function(err, bouquet){
                    if(err) {
                        console.log('error retrieving bouquet by id!')
                    }else {
                        // check if item exists alreadyin bouquet and then push
                        console.log(bouquet)
                        bouquet.items.push(item);
                        bouquet.save()
                        .then(()=> res.json(bouquet))
                        .catch((error)=> res.sendStatus(500));

                    }
                })
        }
    }
}