const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home Route → loads index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// Image Page Route → loads show_image.ejs
app.get('/pay-your-teacher', (req, res) => {
  res.render('index');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
