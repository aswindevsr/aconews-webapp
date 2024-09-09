// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const newsRoutes = require('./routes/newsRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', newsRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('News Backend API');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
