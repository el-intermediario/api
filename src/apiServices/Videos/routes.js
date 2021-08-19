const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getVideo);
router.get('/:path', video.get);
router.get('/', controller.post);

module.exports = router;