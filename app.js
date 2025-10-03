const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import models
const ExchangeRequest = require('./models/ExchangeRequest');
const ReportFeedback = require('./models/ReportFeedback');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://iamsnehask05:Fgn9cp1vSW60KkAp@cluster0.5kena9z.mongodb.net/EchoMarket?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err.message));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/exchange-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'exchange_dash.html'));
});

app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'feedback.html'));
});

app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'report.html'));
});

// Exchange Request APIs
app.get('/api/exchange-requests/:userId', async (req, res) => {
  try {
    const requests = await ExchangeRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get requests' });
  }
});

app.post('/api/exchange-requests', async (req, res) => {
  try {
    const newRequest = new ExchangeRequest(req.body);
    const saved = await newRequest.save();
    res.json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create request' });
  }
});

app.put('/api/exchange-requests/:requestId/status', async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;
    
    const updated = await ExchangeRequest.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );
    
    if (!updated) {
      return res.status(404).json({ error: 'Request not found' });
    }
    
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

// Report & Feedback APIs
app.post('/api/reports', async (req, res) => {
  try {
    const reportData = {
      type: 'Report',
      ...req.body
    };
    
    const newReport = new ReportFeedback(reportData);
    const saved = await newReport.save();
    res.json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit report' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const feedbackData = {
      type: 'Feedback',
      ...req.body
    };
    
    const newFeedback = new ReportFeedback(feedbackData);
    const saved = await newFeedback.save();
    res.json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

app.get('/api/reports-feedback', async (req, res) => {
  try {
    const data = await ReportFeedback.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;