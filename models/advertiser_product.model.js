const pool = require('../config/db');

module.exports = {
  findAll: async () => {
    const query = 'SELECT * FROM affiliate_network.advertiser_products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  findById: async (advertiserId, productId) => {
    const query = {
      text: 'SELECT * FROM affiliate_network.advertiser_products WHERE advertiserid = $1 AND productsid = $2;',
      values: [advertiserId, productId],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  create: async (advertiserId, productId, price, salePrice) => {
    const query = {
      text: 'INSERT INTO affiliate_network.advertiser_products(advertiserid, productsid, price, sale_price) VALUES($1, $2, $3, $4) RETURNING *;',
      values: [advertiserId, productId, price, salePrice],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  update: async (advertiserId, productId, price, salePrice) => {
    const query = {
      text: 'UPDATE affiliate_network.advertiser_products SET price = $3, sale_price = $4 WHERE advertiserid = $1 AND productsid = $2 RETURNING *;',
      values: [advertiserId, productId, price, salePrice],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  delete: async (advertiserId, productId) => {
    const query = {
      text: 'DELETE FROM affiliate_network.advertiser_products WHERE advertiserid = $1 AND productsid = $2;',
      values: [advertiserId, productId],
    };
    try {
      await pool.query(query);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
