// Dependencies
const express = require('express');
const apiPath = require('./routes/apiPath');
const htmlPath = require('./routes/htmlPath');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

// Set the PORT
const PORT = process.env.PORT || 3001;

// call the app
const app = express();

// encode the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiPath);
app.use('/', htmlPath);

// Listener
app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT} 🚀`));
