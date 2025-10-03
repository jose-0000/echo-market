const mongoose = require("mongoose");

const exchangeSchema = new mongoose.Schema({
    confirmedItem: { type: String, required: true },
    pickupAddress: { type: String, required: true },
    dateTime: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Exchange", exchangeSchema);
