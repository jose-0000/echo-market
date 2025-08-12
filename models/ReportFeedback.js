const mongoose = require('mongoose');

const reportFeedbackSchema = new mongoose.Schema({
  type: { type: String, enum: ['Report', 'Feedback'], required: true },

  // For reports
  reportedItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', default: null },
  reportedUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  reason: { type: String, enum: ['Spam', 'Inappropriate', 'Fake', 'Already Given', null], default: null },

  // For feedback
  feedbackType: { type: String, enum: ['Bug', 'Suggestion', 'Complaint', null], default: null },

  // Common fields
  message: { type: String, required: true, trim: true },
  screenshotUrl: { type: String, default: null },
  submittedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  submittedByName: { type: String, required: true }
}, {
  timestamps: true 
});

module.exports = mongoose.model('ReportFeedback', reportFeedbackSchema);
