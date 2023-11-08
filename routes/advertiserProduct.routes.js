// routes/advertiserProduct.routes.js

const express = require('express');
const router = express.Router();
const advertiserProductController = require('../controllers/advertiserProduct.controller');

// Route to associate a product with an advertiser
router.post('/', advertiserProductController.addProductToAdvertiser);

// Route to get all associations
router.get('/', advertiserProductController.getAllAdvertiserProducts);

// Route to get a single association by advertiser and product ids
router.get('/:advertiserId/:productsId', advertiserProductController.getAdvertiserProductById);

// Route to update an association by advertiser and product ids
router.put('/:advertiserId/:productsId', advertiserProductController.updateAdvertiserProduct);

// Route to delete an association by advertiser and product ids
router.delete('/:advertiserId/:productsId', advertiserProductController.removeProductFromAdvertiser);

module.exports = router;
