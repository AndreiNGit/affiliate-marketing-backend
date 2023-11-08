// routes/subscriber.routes.js

const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriber.controller');

// Route to create a new subscriber
router.post('/', subscriberController.createSubscriber);

// Route to get all subscribers
router.get('/', subscriberController.getAllSubscribers);

// Route to get a single subscriber by id
router.get('/:id', subscriberController.getSubscriberById);

// Route to update a subscriber by id
router.put('/:id', subscriberController.updateSubscriber);

// Route to delete a subscriber by id
router.delete('/:id', subscriberController.deleteSubscriber);

module.exports = router;
