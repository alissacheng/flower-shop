const express = require('express');
const flowerRouter = require('./routes/flowers');
const colorRouter = require ('./routes/colors');
const bouquets = require ('./routes/bouquets');
const items = require ('./routes/items');
// const bouquetRouter = require ('./routes/bouquets');
const app = express();
//Bring in Mongoose
const mongoose = require('mongoose');
//Connection string to LOCAL DB
const uri = 'mongodb://localhost:27017/flower-shop';
//Where the SERVER will run (not database)
const PORT = 5000;

// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  })

// Express body parser middleware - update to body parser (this is out of date)
app.use(express.json({ extended: false }));

// TODO
// Define Routes

//localhost:5000/movies -> get stuff from DB code will run
//This will allow our front end to write the code
app.use('/flowers', flowerRouter);
app.use('/colors', colorRouter);

// ***ITEM IS A SUBDOCUMENT
// app.post('/items', items.createItem);

app.get('/bouquets', bouquets.listBouquets);
app.post('/bouquets', bouquets.createBouquet);
app.patch('/bouquets/:bouquetId', bouquets.editBouquet);

// app.use('/bouquets', bouquetRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})

