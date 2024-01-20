const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.categories_mapping;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findById: async (advertiserCategoriesId, categoriesId) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.categories_mapping WHERE advertiser_categoriesid = $1 AND categoriesid = $2;',
      values: [advertiserCategoriesId, categoriesId],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  create: async (advertiserCategoriesId, categoriesId) => {
    const query = {
      text: 'INSERT INTO affiliate_network.categories_mapping(advertiser_categoriesid, categoriesid) VALUES($1, $2) RETURNING *;',
      values: [advertiserCategoriesId, categoriesId],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  delete: async (advertiserCategoriesId, categoriesId) => {
    const query = {
      text: 'DELETE FROM affiliate_network.categories_mapping WHERE advertiser_categoriesid = $1 AND categoriesid = $2;',
      values: [advertiserCategoriesId, categoriesId],
    };
    try {
      await pool.query(query);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
