const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Articles api.
router.get('/', controller.getArticles);
router.post('/', controller.post);

module.exports = router;