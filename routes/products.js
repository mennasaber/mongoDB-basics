const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ message: err });
    }

});
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    try {
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
router.delete('/:productId', async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.productId });
        res.status(200).json(removedProduct);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
router.patch('/:productId', async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.productId }, { $set: { price: req.body.price } });
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
module.exports = router;