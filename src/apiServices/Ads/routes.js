const express = require('express');
const authorize = require('../../utils/authorize');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAds);
router.get('/:idShort', controller.get);
router.put('/:id', authorize(['admin', 'editor']), controller.put);
router.post('/', controller.post);

module.exports = router;