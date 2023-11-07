// controllers/category.controller.js

const CategoryService = require('../services/category.service');

const CategoryController = {
  createCategory: async (req, res) => {
    try {
      const newCategory = await CategoryService.createCategory(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await CategoryService.getCategoryById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const updatedCategory = await CategoryService.updateCategory(req.params.id, req.body);
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await CategoryService.deleteCategory(req.params.id);
      res.status(200).json({ message: "Category successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = CategoryController;
