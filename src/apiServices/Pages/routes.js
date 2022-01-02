const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/', controller.getPages);
router.get('/:slug', controller.get);
router.post('/', controller.post);

module.exports = router;