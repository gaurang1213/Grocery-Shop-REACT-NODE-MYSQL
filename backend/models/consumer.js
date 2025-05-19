// backend/models/consumer.js
const pool = require('../db');
const bcrypt = require('bcryptjs');

async function createConsumer(name, email, password) {
  const hashed = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    'INSERT INTO Consumer (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashed]
  );
  return result.insertId;
}

async function getConsumerByEmail(email) {
  const [rows] = await pool.query('SELECT * FROM Consumer WHERE email = ?', [email]);
  return rows[0];
}

module.exports = { createConsumer, getConsumerByEmail };
