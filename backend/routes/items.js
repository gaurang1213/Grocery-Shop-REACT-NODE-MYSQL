// backend/routes/items.js
const express = require('express');
const router = express.Router();
const { getAllItems } = require('../models/item');

router.get('/', async (req, res) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

module.exports = router;
