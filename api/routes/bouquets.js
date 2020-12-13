const Bouquet = require("../models/Bouquet");

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
    addItem: (req, res) => {
        if (!req.params.bouquetId) {
            res.status(400).json({message: "please select a bouquet"})
        }else {
            const item = req.body;
            const bouquetId = req.params.bouquetId;
            //push into bouquet object
            Bouquet.findById(bouquetId)
                .exec(function(err, bouquet){
                    if(err) {
                        console.log('error retrieving bouquet by id!')
                    }else {
                        // check if item exists alreadyin bouquet and then pushs
                        bouquet.items.push(item);
                        bouquet.save()
                        .then(()=> res.json(bouquet))
                        .catch((error)=> res.sendStatus(500));

                    }
                })
        }
    },

    removeItem: (req, res)=> {
        if (!req.params.bouquetId) {
            res.status(400).json({message: "please select a bouquet"})
        }else {
            const item = req.body;
            const bouquetId = req.params.bouquetId;
            //push into bouquet object
            Bouquet.findById(bouquetId)
            .exec(function(err, bouquet){
                if(err) {
                    console.log('error retrieving bouquet by id!')
                }else {
                    bouquet.items.forEach((flowerItem, index)=> {
                        if(flowerItem.flower === item.flower && flowerItem.color === item.color){
                            bouquet.items.splice(index, 1);
                            bouquet.save()
                            .then(()=> res.json(bouquet))
                            .catch((error)=> res.sendStatus(500));
                        }
                    })
                }
            })
        }
    }
}