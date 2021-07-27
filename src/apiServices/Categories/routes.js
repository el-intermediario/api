const express = require('express');
const router = express.Router();
const controller = require('./controller');

//Categories api 
router.get('/', controller.getCategories);
router.get('/:path', controller.get);
router.post('/', controller.post);

module.exports = router;