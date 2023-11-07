// services/advertiser.service.js

const AdvertiserModel = require('../models/advertiser.model');

const AdvertiserService = {
  createAdvertiser: async (data) => {
    const { name, feed, description, logo_path } = data;
    // Aici poți adăuga orice validare necesară pentru advertiser
    if (!name) {
      throw new Error("Numele advertiserului este obligatoriu.");
    }
    return await AdvertiserModel.create(name, feed, description, logo_path);
  },

  getAllAdvertisers: async () => {
    return await AdvertiserModel.findAll();
  },

  getAdvertiserById: async (id) => {
    const advertiser = await AdvertiserModel.findById(id);
    if (!advertiser) {
      throw new Error("Advertiserul nu a fost găsit.");
    }
    return advertiser;
  },

  updateAdvertiser: async (id, data) => {
    const { name, feed, description, logo_path } = data;
    if (!name) {
      throw new Error("Numele advertiserului este obligatoriu.");
    }
    // Aici poți adăuga orice validare necesară pentru advertiser
    const updatedAdvertiser = await AdvertiserModel.update(id, name, feed, description, logo_path);
    if (!updatedAdvertiser) {
      throw new Error("Advertiserul nu a fost găsit sau actualizat.");
    }
    return updatedAdvertiser;
  },

  deleteAdvertiser: async (id) => {
    const deletedAdvertiser = await AdvertiserModel.delete(id);
    if (!deletedAdvertiser) {
      throw new Error("Advertiserul nu a fost găsit sau șters.");
    }
    return deletedAdvertiser;
  },
};

module.exports = AdvertiserService;
