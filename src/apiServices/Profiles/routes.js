const express = require('express');
const router = express.Router();
const authorize = require('../../utils/authorize');
const controller = require('./controller');
//const addressController = require('../Addresses/AddressController');

// Profile api.
router.get('/:id', controller.getProfile);
router.post('/', authorize('client'), controller.createProfile);

// Address Api.
//router.get('/address', authorize(['cliente', 'market_admin']), addressController.getAll);
//router.post('/address/create', authorize(['cliente', 'market_admin']), addressController.create);

module.exports = router;