// services/categoryProduct.service.js

const CategoryProductModel = require('../models/categoryProduct.model');

const CategoryProductService = {
  addProductToCategory: async (CategoriesId, ProductsId) => {
    // Validează dacă Categoria și Produsul există, dacă este necesar
    return await CategoryProductModel.create(CategoriesId, ProductsId);
  },

  getAllCategoryProducts: async () => {
    return await CategoryProductModel.findAll();
  },

  getCategoryProductById: async (CategoriesId, ProductsId) => {
    const categoryProduct = await CategoryProductModel.findById(CategoriesId, ProductsId);
    if (!categoryProduct) {
      throw new Error("Asocierea dintre categorie și produs nu a fost găsită.");
    }
    return categoryProduct;
  },

  // Deoarece actualizarea unei asocieri nu este o operație comună,
  // putem să nu includem un serviciu pentru actualizare aici, 
  // sau putem decide să oferim doar posibilitatea de a actualiza anumite câmpuri, dacă există.

  removeProductFromCategory: async (CategoriesId, ProductsId) => {
    const deletedCategoryProduct = await CategoryProductModel.delete(CategoriesId, ProductsId);
    if (!deletedCategoryProduct) {
      throw new Error("Asocierea dintre categorie și produs nu a fost găsită sau ștearsă.");
    }
    return deletedCategoryProduct;
  },
};

module.exports = CategoryProductService;
