// const express = require("express");
// const router = express.Router();
const Item = require("../models/Item");


module.exports = {
    //GET items
    listItems: (req, res) => {
        Item.find().then(records => res.send(records));
    },
    //create item
    createItem: (req, res) => {
        const item = new Item(req.body);
        //check if item exists already before saving
        item.save()
        .then(()=> res.json(item))
        .catch((error)=> res.sendStatus(500));
        //add error message above
    }
}