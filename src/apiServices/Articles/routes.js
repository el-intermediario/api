const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authorize = require('../../utils/authorize');

// Articles api.
router.get('/', controller.getArticles);
router.get('/:path', controller.get);
router.post('/', authorize(['admin', 'editor']), controller.post);

module.exports = router;