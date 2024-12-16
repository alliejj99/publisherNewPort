const express = require('express');
const path = require('path');

const app = express();

// Static files middleware
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all routes and return the main index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
