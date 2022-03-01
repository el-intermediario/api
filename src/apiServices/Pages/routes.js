const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authorize = require('../../utils/authorize');


router.get('/', controller.getPages);
router.get('/:slug', controller.get);
router.post('/', authorize(['admin', 'editor']), controller.post);

module.exports = router;