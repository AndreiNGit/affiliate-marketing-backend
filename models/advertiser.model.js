const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.advertisers;';
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
      text: 'SELECT * FROM affiliate_network.advertisers WHERE id = $1;',
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

  create: async (name, feed, description, logo_path) => {
    const query = {
      text: 'INSERT INTO affiliate_network.advertisers(name, feed, description, logo_path) VALUES($1, $2, $3, $4) RETURNING *;',
      values: [name, feed, description, logo_path],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, name, feed, description, logo_path) => {
    const query = {
      text: 'UPDATE affiliate_network.advertisers SET name = $2, feed = $3, description = $4, logo_path = $5 WHERE id = $1 RETURNING *;',
      values: [id, name, feed, description, logo_path],
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
      text: 'DELETE FROM affiliate_network.advertisers WHERE id = $1;',
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
