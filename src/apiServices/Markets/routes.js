const express = require('express');
const router = express.Router();
const authorize = require('../../utils/authorize');
const role = require('../../utils/role');
const controller = require('./controller');
const productController = require('../Products/controller');
const productOptionController = require('../ProductOptions/controller');
//const additionalController = require('../controllers/AdditionalController');

// Markets api.
router.get('/', controller.getMarkets);
router.get('/:id', controller.getMarket);

// Products api.
router.get('/:id/products', productController.getProducts);

// ProductOptions api.
router.get('/:id/products/:idProduct/options', productOptionController.getProductOptions);
router.post('/:id/products/:idProduct/options', productOptionController.addProductOption);

module.exports = router;