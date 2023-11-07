// services/product.service.js

const ProductModel = require('../models/product.model');

const ProductService = {
  createProduct: async (data) => {
    const { title, description, short_description, link, image_path } = data;
    if (!title) {
      throw new Error("Titlul produsului este obligatoriu.");
    }
    // Validează alte câmpuri după necesități...
    return await ProductModel.create({ title, description, short_description, link, image_path });
  },

  getAllProducts: async () => {
    return await ProductModel.findAll();
  },

  getProductById: async (id) => {
    const product = await ProductModel.findById(id);
    if (!product) {
      throw new Error("Produsul nu a fost găsit.");
    }
    return product;
  },

  updateProduct: async (id, data) => {
    const { title, description, short_description, link, image_path } = data;
    if (!title) {
      throw new Error("Titlul produsului este obligatoriu.");
    }
    // Validează alte câmpuri după necesități...
    const updatedProduct = await ProductModel.update(id, { title, description, short_description, link, image_path });
    if (!updatedProduct) {
      throw new Error("Produsul nu a fost găsit sau actualizat.");
    }
    return updatedProduct;
  },

  deleteProduct: async (id) => {
    const deletedProduct = await ProductModel.delete(id);
    if (!deletedProduct) {
      throw new Error("Produsul nu a fost găsit sau șters.");
    }
    return deletedProduct;
  },
};

module.exports = ProductService;
