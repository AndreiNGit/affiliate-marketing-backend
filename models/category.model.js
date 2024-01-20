const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.categories;';
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
      text: 'SELECT * FROM affiliate_network.categories WHERE id = $1;',
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

  create: async (name, description, master_category) => {
    const query = {
      text: 'INSERT INTO affiliate_network.categories(name, description, master_category) VALUES($1, $2, $3) RETURNING *;',
      values: [name, description, master_category],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, name, description, master_category) => {
    const query = {
      text: 'UPDATE affiliate_network.categories SET name = $2, description = $3, master_category = $4 WHERE id = $1 RETURNING *;',
      values: [id, name, description, master_category],
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
      text: 'DELETE FROM affiliate_network.categories WHERE id = $1;',
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