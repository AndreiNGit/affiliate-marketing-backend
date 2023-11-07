// services/subscriber.service.js

const SubscriberModel = require('../models/subscriber.model');

const SubscriberService = {
  createSubscriber: async (data) => {
    const { name, mail } = data;
    if (!mail) {
      throw new Error("Adresa de email este obligatorie pentru abonat.");
    }
    // Pot fi adăugate aici alte validări necesare
    return await SubscriberModel.create(name, mail);
  },

  getAllSubscribers: async () => {
    return await SubscriberModel.findAll();
  },

  getSubscriberById: async (id) => {
    const subscriber = await SubscriberModel.findById(id);
    if (!subscriber) {
      throw new Error("Abonatul nu a fost găsit.");
    }
    return subscriber;
  },

  updateSubscriber: async (id, data) => {
    const { name, mail } = data;
    if (!mail) {
      throw new Error("Adresa de email este obligatorie pentru abonat.");
    }
    const updatedSubscriber = await SubscriberModel.update(id, name, mail);
    if (!updatedSubscriber) {
      throw new Error("Abonatul nu a fost găsit sau actualizat.");
    }
    return updatedSubscriber;
  },

  deleteSubscriber: async (id) => {
    const deletedSubscriber = await SubscriberModel.delete(id);
    if (!deletedSubscriber) {
      throw new Error("Abonatul nu a fost găsit sau șters.");
    }
    return deletedSubscriber;
  },
};

module.exports = SubscriberService;
