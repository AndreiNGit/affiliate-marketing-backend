// models/comment.model.js

const pool = require('../config/db');

const CommentModel = {
  // Crearea unui nou comentariu
  create: async ({ content, author, author_ip, post_id, comment_parent }) => {
    const query = `
      INSERT INTO Comments (content, author, author_ip, post_id, comment_parent, approved, date)
      VALUES ($1, $2, $3, $4, $5, false, NOW()) RETURNING *;
    `;
    // Presupunem că toate comentariile noi nu sunt aprobate inițial (approved = false)
    const values = [content, author, author_ip, post_id, comment_parent];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor comentariilor
  findAll: async () => {
    const query = 'SELECT * FROM Comments;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unui comentariu prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Comments WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unui comentariu prin ID
  update: async (id, { content, approved }) => {
    const query = `
      UPDATE Comments 
      SET content = $1, approved = $2, date = NOW()
      WHERE id = $3 RETURNING *;
    `;
    // Actualizarea conținutului comentariului și a stării de aprobare, data actualizării este setată la momentul curent
    const values = [content, approved, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui comentariu prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Comments WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CommentModel;
