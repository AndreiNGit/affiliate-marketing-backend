// routes/product.routes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Route to create a new product
router.post('/', productController.createProduct);

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a single product by id
router.get('/:id', productController.getProductById);

// Route to update a product by id
router.put('/:id', productController.updateProduct);

// Route to delete a product by id
router.delete('/:id', productController.deleteProduct);

module.exports = router;
