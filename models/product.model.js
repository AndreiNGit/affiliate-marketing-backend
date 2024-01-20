const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findById: async (id) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.products WHERE id = $1;',
      values: [id],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findByCategory: async (category_id) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.products WHERE category_id = $1;',
      values: [category_id],
    };
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findByAdvertiser: async (advertiser_id) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.products WHERE advertiser_id = $1;',
      values: [advertiser_id],
    };
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  create: async (title, description, short_description, link, image_path) => {
    const query = {
      text: 'INSERT INTO affiliate_network.products(title, description, short_description, link, image_path) VALUES($1, $2, $3, $4, $5) RETURNING *;',
      values: [title, description, short_description, link, image_path],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, title, description, short_description, link, image_path) => {
    const query = {
      text: 'UPDATE affiliate_network.products SET title = $2, description = $3, short_description = $4, link = $5, image_path = $6 WHERE id = $1 RETURNING *;',
      values: [id, title, description, short_description, link, image_path],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  delete: async (id) => {
    const query = {
      text: 'DELETE FROM affiliate_network.products WHERE id = $1;',
      values: [id],
    };
    try {
      await pool.query(query);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
