// controllers/subscriber.controller.js

const SubscriberService = require('../services/subscriber.service');

const SubscriberController = {
  createSubscriber: async (req, res) => {
    try {
      const newSubscriber = await SubscriberService.createSubscriber(req.body);
      res.status(201).json(newSubscriber);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllSubscribers: async (req, res) => {
    try {
      const subscribers = await SubscriberService.getAllSubscribers();
      res.status(200).json(subscribers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSubscriberById: async (req, res) => {
    try {
      const subscriber = await SubscriberService.getSubscriberById(req.params.id);
      res.status(200).json(subscriber);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateSubscriber: async (req, res) => {
    try {
      const updatedSubscriber = await SubscriberService.updateSubscriber(req.params.id, req.body);
      res.status(200).json(updatedSubscriber);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteSubscriber: async (req, res) => {
    try {
      await SubscriberService.deleteSubscriber(req.params.id);
      res.status(200).json({ message: "Subscriber successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = SubscriberController;
