// models/category.model.js

const pool = require('../config/db');

const CategoryModel = {
  // Crearea unei noi categorii
  create: async (name, description) => {
    const query = 'INSERT INTO Categories (name, description) VALUES ($1, $2) RETURNING *;';
    const values = [name, description];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor categoriilor
  findAll: async () => {
    const query = 'SELECT * FROM Categories;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unei singure categorii prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Categories WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unei categorii prin ID
  update: async (id, name, description) => {
    const query = 'UPDATE Categories SET name = $1, description = $2 WHERE id = $3 RETURNING *;';
    const values = [name, description, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unei categorii prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Categories WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CategoryModel;