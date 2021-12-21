const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getVideosInHome);
router.get('/:path', controller.get);
router.post('/', controller.post);

module.exports = router;