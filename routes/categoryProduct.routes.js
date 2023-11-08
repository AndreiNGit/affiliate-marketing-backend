// routes/categoryProduct.routes.js

const express = require('express');
const router = express.Router();
const categoryProductController = require('../controllers/categoryProduct.controller');

// Route to add a product to a category
router.post('/', categoryProductController.addProductToCategory);

// Route to get all category-product associations
router.get('/', categoryProductController.getAllCategoryProducts);

// Route to delete a product from a category
router.delete('/:categoryId/:productId', categoryProductController.removeProductFromCategory);

module.exports = router;
