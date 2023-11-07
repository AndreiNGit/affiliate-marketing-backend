// controllers/categoryProduct.controller.js

const CategoryProductService = require('../services/categoryProduct.service');

const CategoryProductController = {
  addProductToCategory: async (req, res) => {
    try {
      const { CategoriesId, ProductsId } = req.body;
      const categoryProduct = await CategoryProductService.addProductToCategory(CategoriesId, ProductsId);
      res.status(201).json(categoryProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllCategoryProducts: async (req, res) => {
    try {
      const categoryProducts = await CategoryProductService.getAllCategoryProducts();
      res.status(200).json(categoryProducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryProductById: async (req, res) => {
    try {
      const { categoryId, productId } = req.params;
      const categoryProduct = await CategoryProductService.getCategoryProductById(categoryId, productId);
      res.status(200).json(categoryProduct);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  removeProductFromCategory: async (req, res) => {
    try {
      const { categoryId, productId } = req.params;
      await CategoryProductService.removeProductFromCategory(categoryId, productId);
      res.status(200).json({ message: "The product was successfully removed from the category." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = CategoryProductController;
