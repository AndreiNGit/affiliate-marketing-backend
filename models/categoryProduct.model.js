// models/categoryProduct.model.js

const pool = require('../config/db');

const CategoryProductModel = {
  // Crearea unei noi asocieri între o categorie și un produs
  create: async (CategoriesId, ProductsId) => {
    const query = `
      INSERT INTO Categories_Products (CategoriesId, ProductsId) 
      VALUES ($1, $2) RETURNING *;
    `;
    const values = [CategoriesId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor asocierilor
  findAll: async () => {
    const query = 'SELECT * FROM Categories_Products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unei asocieri prin ID-uri
  findById: async (CategoriesId, ProductsId) => {
    const query = `
      SELECT * FROM Categories_Products 
      WHERE CategoriesId = $1 AND ProductsId = $2;
    `;
    const values = [CategoriesId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unei asocieri este puțin diferită, deoarece de obicei asocierile nu sunt actualizate,
  // ci mai degrabă create sau șterse. Dacă este necesar să actualizezi, va trebui să definești ce înseamnă aceasta pentru aplicația ta.

  // Ștergerea unei asocieri prin ID-uri
  delete: async (CategoriesId, ProductsId) => {
    const query = `
      DELETE FROM Categories_Products 
      WHERE CategoriesId = $1 AND ProductsId = $2 RETURNING *;
    `;
    const values = [CategoriesId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CategoryProductModel;
