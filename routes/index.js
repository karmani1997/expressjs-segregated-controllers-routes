// routes/index.js
const express = require('express');
const router = express.Router();

// Require the controller
const helloController = require('../controllers/helloController');

module.exports = (app) => {
  // Define your routes here
  router.get('/hello', helloController.sayHello);

  // Mount the router on the app
  app.use('/api', router);
};
