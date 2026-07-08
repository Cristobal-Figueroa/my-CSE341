const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactsRoutes = require('./routes/contacts');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/contacts', contactsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Contacts API - W01 Project');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
