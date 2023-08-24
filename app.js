const express = require('express');
const app = express();

// Require the routes file and pass the app instance
const routes = require('./routes')(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
