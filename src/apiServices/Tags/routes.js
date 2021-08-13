const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Tags api.
router.get('/', controller.getTags);
router.get('/:path', controller.get);
router.post('/', controller.post);

module.exports = router;