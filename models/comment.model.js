const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.comments;';
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
      text: 'SELECT * FROM affiliate_network.comments WHERE id = $1;',
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

  create: async (content, author, author_ip, date, approved, comment_parent, postid) => {
    const query = {
      text: 'INSERT INTO affiliate_network.comments(content, author, author_ip, date, approved, comment_parent, postid) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
      values: [content, author, author_ip, date, approved, comment_parent, postid],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (id, content, author, author_ip, date, approved, comment_parent, postid) => {
    const query = {
      text: 'UPDATE affiliate_network.comments SET content = $2, author = $3, author_ip = $4, date = $5, approved = $6, comment_parent = $7, postid = $8 WHERE id = $1 RETURNING *;',
      values: [id, content, author, author_ip, date, approved, comment_parent, postid],
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
      text: 'DELETE FROM affiliate_network.comments WHERE id = $1;',
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
