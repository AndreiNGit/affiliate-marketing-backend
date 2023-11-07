// config/db.js

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Crearea unei noi instanțe de pool folosind configurația specificată în variabilele de mediu
const pool = new Pool({
  user: process.env.DB_USER,        // Numele utilizatorului pentru baza de date
  host: process.env.DB_HOST,        // Hostul pe care rulează baza de date
  database: process.env.DB_NAME,    // Numele bazei de date
  password: process.env.DB_PASS,    // Parola pentru baza de date
  port: process.env.DB_PORT,        // Portul pe care ascultă baza de date
  // În producție, ai putea dori să adaugi și alte opțiuni precum ssl
});

// Exportăm pool pentru a putea fi folosit în alte părți ale aplicației
module.exports = pool;
