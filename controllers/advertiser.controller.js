// controllers/advertiser.controller.js

const AdvertiserService = require('../services/advertiser.service');

const AdvertiserController = {
  createAdvertiser: async (req, res) => {
    try {
      const newAdvertiser = await AdvertiserService.createAdvertiser(req.body);
      res.status(201).json(newAdvertiser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllAdvertisers: async (req, res) => {
    try {
      const advertisers = await AdvertiserService.getAllAdvertisers();
      res.status(200).json(advertisers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAdvertiserById: async (req, res) => {
    try {
      const advertiser = await AdvertiserService.getAdvertiserById(req.params.id);
      res.status(200).json(advertiser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateAdvertiser: async (req, res) => {
    try {
      const updatedAdvertiser = await AdvertiserService.updateAdvertiser(req.params.id, req.body);
      res.status(200).json(updatedAdvertiser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAdvertiser: async (req, res) => {
    try {
      await AdvertiserService.deleteAdvertiser(req.params.id);
      res.status(200).json({ message: "Advertiser successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AdvertiserController;
