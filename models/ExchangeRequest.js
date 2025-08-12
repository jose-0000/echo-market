const mongoose = require('mongoose');

const exchangeRequestSchema = new mongoose.Schema({
  requesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requesterName: { type: String, required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  itemName: { type: String, required: true },
  offeredItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', default: null },
  offeredItemName: { type: String, default: null },
  message: { type: String, trim: true },
  status: { type: String, enum: ['Pending', 'Accepted', 'Declined'], default: 'Pending' },
}, {
  timestamps: true 
});

module.exports = mongoose.model('ExchangeRequest', exchangeRequestSchema);
