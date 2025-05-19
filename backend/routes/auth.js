// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createConsumer, getConsumerByEmail } = require('../models/consumer');

const JWT_SECRET = 'your_jwt_secret'; // Change to strong secret

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await getConsumerByEmail(email);
    if (existing) return res.status(400).json({ message: 'Email already exists' });
    await createConsumer(name, email, password);
    res.json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const consumer = await getConsumerByEmail(email);
    if (!consumer) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, consumer.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: consumer.id, email: consumer.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, name: consumer.name });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
