const express = require('express');
const router = express.Router();
const Exchange = require('../models/Exchange');

// POST /api/exchange
router.post('/', async (req, res) => {
    const { confirmedItem, pickupAddress, dateTime, contactNumber, notes } = req.body;

    if (!confirmedItem || !pickupAddress || !dateTime || !contactNumber) {
        return res.status(400).json({ error: "All required fields must be filled" });
    }

    try {
        const exchange = new Exchange({ confirmedItem, pickupAddress, dateTime, contactNumber, notes });
        await exchange.save();
        res.status(201).json({ message: "Exchange saved successfully", exchange });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

