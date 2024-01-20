const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.posts;';
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
      text: 'SELECT * FROM affiliate_network.posts WHERE id = $1;',
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

  create: async (title, slug, content, is_draft, is_private, date, password, modified, author) => {
    const query = {
      text: 'INSERT INTO affiliate_network.posts(title, slug, content, is_draft, is_private, date, password, modified, author) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
      values: [title, slug, content, is_draft, is_private, date, password, modified, author],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, title, slug, content, is_draft, is_private, date, password, modified, author) => {
    const query = {
      text: 'UPDATE affiliate_network.posts SET title = $2, slug = $3, content = $4, is_draft = $5, is_private = $6, date = $7, password = $8, modified = $9, author = $10 WHERE id = $1 RETURNING *;',
      values: [id, title, slug, content, is_draft, is_private, date, password, modified, author],
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
      text: 'DELETE FROM affiliate_network.posts WHERE id = $1;',
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
