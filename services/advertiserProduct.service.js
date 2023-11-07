// services/advertiserProduct.service.js

const AdvertiserProductModel = require('../models/advertiserProduct.model');

const AdvertiserProductService = {
  addProductToAdvertiser: async (data) => {
    const { AdvertiserId, ProductsId, price, sale_price } = data;
    // Poți adăuga aici validări suplimentare, dacă este necesar
    if (!AdvertiserId || !ProductsId) {
      throw new Error("Atât ID-ul advertiserului, cât și ID-ul produsului sunt necesare.");
    }
    return await AdvertiserProductModel.create(AdvertiserId, ProductsId, price, sale_price);
  },

  getAllAdvertiserProducts: async () => {
    return await AdvertiserProductModel.findAll();
  },

  getAdvertiserProductById: async (AdvertiserId, ProductsId) => {
    const advertiserProduct = await AdvertiserProductModel.findById(AdvertiserId, ProductsId);
    if (!advertiserProduct) {
      throw new Error("Relația între advertiser și produs nu a fost găsită.");
    }
    return advertiserProduct;
  },

  updateAdvertiserProduct: async (AdvertiserId, ProductsId, data) => {
    const { price, sale_price } = data;
    // Poți adăuga aici validări suplimentare, dacă este necesar
    const updatedAdvertiserProduct = await AdvertiserProductModel.update(AdvertiserId, ProductsId, price, sale_price);
    if (!updatedAdvertiserProduct) {
      throw new Error("Relația între advertiser și produs nu a fost găsită sau actualizată.");
    }
    return updatedAdvertiserProduct;
  },

  removeProductFromAdvertiser: async (AdvertiserId, ProductsId) => {
    const removedAdvertiserProduct = await AdvertiserProductModel.delete(AdvertiserId, ProductsId);
    if (!removedAdvertiserProduct) {
      throw new Error("Relația între advertiser și produs nu a fost găsită sau ștearsă.");
    }
    return removedAdvertiserProduct;
  },
};

module.exports = AdvertiserProductService;