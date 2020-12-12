const express = require('express');
const cors = require('cors');

const flowerRouter = require('./routes/flowers');
const colorRouter = require ('./routes/colors');
const bouquets = require ('./routes/bouquets');

const app = express();
app.use(cors());
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

app.use('/flowers', flowerRouter);
app.use('/colors', colorRouter);

app.get('/bouquets', bouquets.listBouquets);
app.post('/bouquets', bouquets.createBouquet);
app.patch('/bouquets/:bouquetId', bouquets.addItem);
app.patch('/bouquets/:bouquetId/remove', bouquets.removeItem);
app.get('/bouquets/:bouquetId', bouquets.listBouquetItems);

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('build'));

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});
// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})

