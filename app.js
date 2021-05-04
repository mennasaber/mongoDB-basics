const express = require('express');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongodb');
});
app.use(express.json());
app.use('/api/products', productsRoute);
app.listen(port, (req, res) => {
    console.log("Server is connecting...");
});