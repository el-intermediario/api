const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/', controller.getAds);
router.get('/:path', controller.get);
router.post('/', controller.post);

module.exports = router;