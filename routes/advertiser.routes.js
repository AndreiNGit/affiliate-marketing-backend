// routes/advertiser.routes.js

const express = require('express');
const router = express.Router();
const advertiserController = require('../controllers/advertiser.controller');

// Route to create a new advertiser
router.post('/', advertiserController.createAdvertiser);

// Route to get all advertisers
router.get('/', advertiserController.getAllAdvertisers);

// Route to get a single advertiser by id
router.get('/:id', advertiserController.getAdvertiserById);

// Route to update an advertiser by id
router.put('/:id', advertiserController.updateAdvertiser);

// Route to delete an advertiser by id
router.delete('/:id', advertiserController.deleteAdvertiser);

module.exports = router;
