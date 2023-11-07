// models/advertiser.model.js

const pool = require('../config/db');

const AdvertiserModel = {
  // Crearea unui nou advertiser
  create: async (name, feed, description, logo_path) => {
    const query = 'INSERT INTO Advertiser (name, feed, description, logo_path) VALUES ($1, $2, $3, $4) RETURNING *;';
    const values = [name, feed, description, logo_path];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor advertiserilor
  findAll: async () => {
    const query = 'SELECT * FROM Advertiser;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unui advertiser prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Advertiser WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unui advertiser prin ID
  update: async (id, name, feed, description, logo_path) => {
    const query = 'UPDATE Advertiser SET name = $1, feed = $2, description = $3, logo_path = $4 WHERE id = $5 RETURNING *;';
    const values = [name, feed, description, logo_path, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui advertiser prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Advertiser WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = AdvertiserModel;
