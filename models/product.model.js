// models/product.model.js

const pool = require('../config/db');

const ProductModel = {
  // Crearea unui nou produs
  create: async ({ title, description, short_description, link, image_path }) => {
    const query = `
      INSERT INTO Products (title, description, short_description, link, image_path) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [title, description, short_description, link, image_path];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor produselor
  findAll: async () => {
    const query = 'SELECT * FROM Products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unui singur produs prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Products WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unui produs prin ID
  update: async (id, { title, description, short_description, link, image_path }) => {
    const query = `
      UPDATE Products 
      SET title = $1, description = $2, short_description = $3, link = $4, image_path = $5 
      WHERE id = $6 RETURNING *;
    `;
    const values = [title, description, short_description, link, image_path, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui produs prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Products WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ProductModel;
