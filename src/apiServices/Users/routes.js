const express = require('express');
const router = express.Router();
const authorize = require('../../utils/authorize');
const controller = require('./controller');

router.get('/:id', controller.getUser);     // public route
router.get('/', controller.getUsers); // admin only
//router.get('/:id', authorize(), userController.getById);       // all authenticated users

module.exports = router;