const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getCover);
router.get('/:path', cover.get);
router.get('/', controller.post);

module.exports = router;