// services/category.service.js

const CategoryModel = require('../models/category.model');

const CategoryService = {
  createCategory: async (data) => {
    const { name, description } = data;
    if (!name) {
      throw new Error("Numele categoriei este obligatoriu.");
    }
    return await CategoryModel.create(name, description);
  },

  getAllCategories: async () => {
    return await CategoryModel.findAll();
  },

  getCategoryById: async (id) => {
    const category = await CategoryModel.findById(id);
    if (!category) {
      throw new Error("Categoria nu a fost găsită.");
    }
    return category;
  },

  updateCategory: async (id, data) => {
    const { name, description } = data;
    if (!name) {
      throw new Error("Numele categoriei este obligatoriu.");
    }
    const updatedCategory = await CategoryModel.update(id, name, description);
    if (!updatedCategory) {
      throw new Error("Categoria nu a fost găsită sau actualizată.");
    }
    return updatedCategory;
  },

  deleteCategory: async (id) => {
    const deletedCategory = await CategoryModel.delete(id);
    if (!deletedCategory) {
      throw new Error("Categoria nu a fost găsită sau ștearsă.");
    }
    return deletedCategory;
  },
};

module.exports = CategoryService;