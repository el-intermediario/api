const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authorize = require('../../utils/authorize');

router.get('/', controller.get);
router.put('/', controller.put);

module.exports = router;