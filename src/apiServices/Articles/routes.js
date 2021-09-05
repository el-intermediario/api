const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authorize = require('../../utils/authorize');

// Articles api.
router.get('/:id', controller.get);
router.post('/', authorize(['admin', 'editor']), controller.post);
router.put('/:id', authorize(['admin', 'editor']), controller.put);
router.get('/', controller.Articles);
router.get('/:id/related', controller.ArticlesRelated);

module.exports = router;