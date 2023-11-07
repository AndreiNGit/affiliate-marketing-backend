// models/user.model.js

const pool = require('../config/db');

const UserModel = {
  // Crearea unui nou utilizator
  create: async (name, username, mail, password, is_admin) => {
    const query = `
      INSERT INTO Users (name, username, mail, password, is_admin) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [name, username, mail, password, is_admin];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor utilizatorilor
  findAll: async () => {
    const query = 'SELECT * FROM Users;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unui utilizator prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Users WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unui utilizator prin ID
  update: async (id, name, username, mail, password, is_admin) => {
    const query = `
      UPDATE Users 
      SET name = $1, username = $2, mail = $3, password = $4, is_admin = $5 
      WHERE id = $6 RETURNING *;
    `;
    const values = [name, username, mail, password, is_admin, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui utilizator prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Users WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UserModel;
