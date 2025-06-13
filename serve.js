const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use('/StudioFreightProjectInquiryForm', express.static(path.join(__dirname, 'dist')));

// Redirect root to the correct path
app.get('/', (req, res) => {
  res.redirect('/StudioFreightProjectInquiryForm');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 