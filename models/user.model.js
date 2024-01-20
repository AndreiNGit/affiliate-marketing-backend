const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.users;';
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
      text: 'SELECT * FROM affiliate_network.users WHERE id = $1;',
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

  create: async (name, username, mail, password, role) => {
    const query = {
      text: 'INSERT INTO affiliate_network.users(name, username, mail, password, role) VALUES($1, $2, $3, $4, $5) RETURNING *;',
      values: [name, username, mail, password, role],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, name, username, mail, password, role) => {
    const query = {
      text: 'UPDATE affiliate_network.users SET name = $2, username = $3, mail = $4, password = $5, role = $6 WHERE id = $1 RETURNING *;',
      values: [id, name, username, mail, password, role],
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
      text: 'DELETE FROM affiliate_network.users WHERE id = $1;',
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
