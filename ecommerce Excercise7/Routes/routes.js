const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');
//
router.get('/', productController.getProductPage);

// Add more routes as needed

module.exports = router;
