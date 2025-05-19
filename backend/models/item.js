// backend/models/item.js
const pool = require('../db');

async function getAllItems() {
  const [rows] = await pool.query('SELECT * FROM Items');
  return rows;
}

module.exports = { getAllItems };
