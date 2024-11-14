const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (e.g., HTML, CSS, images) from the "public" directory
app.use(express.static('public'));

// Basic route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
