const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getCustomer);
router.get('/:path', controller.get);
router.post('/', controller.post);

module.exports = router;