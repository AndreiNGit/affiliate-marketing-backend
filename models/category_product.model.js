const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.categories_products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findById: async (categoriesId, productsId) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.categories_products WHERE categoriesid = $1 AND productsid = $2;',
      values: [categoriesId, productsId],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  create: async (categoriesId, productsId) => {
    const query = {
      text: 'INSERT INTO affiliate_network.categories_products(categoriesid, productsid) VALUES($1, $2) RETURNING *;',
      values: [categoriesId, productsId],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  delete: async (categoriesId, productsId) => {
    const query = {
      text: 'DELETE FROM affiliate_network.categories_products WHERE categoriesid = $1 AND productsid = $2;',
      values: [categoriesId, productsId],
    };
    try {
      await pool.query(query);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
