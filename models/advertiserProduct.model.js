// models/advertiserProduct.model.js

const pool = require('../config/db');

const AdvertiserProductModel = {
  // Adăugarea unui produs nou de la un advertiser
  create: async (AdvertiserId, ProductsId, price, sale_price) => {
    const query = `
      INSERT INTO Advertiser_Products (AdvertiserId, ProductsId, price, sale_price) 
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [AdvertiserId, ProductsId, price, sale_price];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Obținerea tuturor produselor de la advertiseri
  findAll: async () => {
    const query = 'SELECT * FROM Advertiser_Products;';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Obținerea unui produs de la un advertiser prin ID-uri
  findById: async (AdvertiserId, ProductsId) => {
    const query = `
      SELECT * FROM Advertiser_Products 
      WHERE AdvertiserId = $1 AND ProductsId = $2;
    `;
    const values = [AdvertiserId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizarea prețurilor unui produs de la un advertiser
  update: async (AdvertiserId, ProductsId, price, sale_price) => {
    const query = `
      UPDATE Advertiser_Products 
      SET price = $1, sale_price = $2 
      WHERE AdvertiserId = $3 AND ProductsId = $4 RETURNING *;
    `;
    const values = [price, sale_price, AdvertiserId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Ștergerea unui produs de la un advertiser
  delete: async (AdvertiserId, ProductsId) => {
    const query = `
      DELETE FROM Advertiser_Products 
      WHERE AdvertiserId = $1 AND ProductsId = $2 RETURNING *;
    `;
    const values = [AdvertiserId, ProductsId];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = AdvertiserProductModel;
