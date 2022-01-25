const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authorize = require('../../utils/authorize');

router.get('/', controller.get);
router.put('/:id', authorize(['admin', 'editor']), controller.put);
router.post('/', authorize(['admin', 'editor']), controller.post);

module.exports = router;