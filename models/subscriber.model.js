// models/subscriber.model.js

const pool = require('../config/db');

const SubscriberModel = {
  // Crearea unui nou abonat
  create: async (name, mail) => {
    const query = 'INSERT INTO Subscribers (name, mail) VALUES ($1, $2) RETURNING *;';
    const values = [name, mail];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Citirea tuturor abonaților
  findAll: async () => {
    const query = 'SELECT * FROM Subscribers;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Citirea unui abonat prin ID
  findById: async (id) => {
    const query = 'SELECT * FROM Subscribers WHERE id = $1;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea unui abonat prin ID
  update: async (id, name, mail) => {
    const query = 'UPDATE Subscribers SET name = $1, mail = $2 WHERE id = $3 RETURNING *;';
    const values = [name, mail, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui abonat prin ID
  delete: async (id) => {
    const query = 'DELETE FROM Subscribers WHERE id = $1 RETURNING *;';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = SubscriberModel;