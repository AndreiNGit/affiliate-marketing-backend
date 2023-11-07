// controllers/advertiserProduct.controller.js

const AdvertiserProductService = require('../services/advertiserProduct.service');

const AdvertiserProductController = {
  addProductToAdvertiser: async (req, res) => {
    try {
      const { AdvertiserId, ProductsId, price, sale_price } = req.body;
      const addedProduct = await AdvertiserProductService.addProductToAdvertiser({ AdvertiserId, ProductsId, price, sale_price });
      res.status(201).json(addedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllAdvertiserProducts: async (req, res) => {
    try {
      const advertiserProducts = await AdvertiserProductService.getAllAdvertiserProducts();
      res.status(200).json(advertiserProducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAdvertiserProductById: async (req, res) => {
    try {
      const { AdvertiserId, ProductsId } = req.params;
      const advertiserProduct = await AdvertiserProductService.getAdvertiserProductById(AdvertiserId, ProductsId);
      res.status(200).json(advertiserProduct);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateAdvertiserProduct: async (req, res) => {
    try {
      const { AdvertiserId, ProductsId } = req.params;
      const { price, sale_price } = req.body;
      const updatedProduct = await AdvertiserProductService.updateAdvertiserProduct(AdvertiserId, ProductsId, { price, sale_price });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeProductFromAdvertiser: async (req, res) => {
    try {
      const { AdvertiserId, ProductsId } = req.params;
      await AdvertiserProductService.removeProductFromAdvertiser(AdvertiserId, ProductsId);
      res.status(200).json({ message: "Product successfully removed from advertiser" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AdvertiserProductController;
