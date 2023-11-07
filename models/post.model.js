// models/post.model.js

const pool = require('../config/db');

const PostModel = {
  // Crearea unui nou post
  create: async ({ title, slug, content, description, is_draft, is_private, password, author }) => {
    const query = `
      INSERT INTO Post (title, slug, content, description, is_draft, is_private, password, author) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
    `;
    const values = [title, slug, content, description, is_draft, is_private, password, author];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor postărilor
  findAll: async () => {
    const query = 'SELECT * FROM Post;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unei postări prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Post WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unei postări prin ID
  update: async (id, { title, slug, content, description, is_draft, is_private, password, author }) => {
    const query = `
      UPDATE Post 
      SET title = $1, slug = $2, content = $3, description = $4, 
          is_draft = $5, is_private = $6, password = $7, author = $8 
      WHERE id = $9 RETURNING *;
    `;
    const values = [title, slug, content, description, is_draft, is_private, password, author, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unei postări prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Post WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = PostModel;
