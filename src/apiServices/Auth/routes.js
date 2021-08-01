const express = require('express');
const router = express.Router();
const authorize = require('../../utils/authorize');
const controller = require('./controller');

router.post('/login', controller.login);     // public route
router.post('/register', authorize(['admin']), controller.register);     // public route
//router.post('/access', controller.accessSocial);     // public route
//router.get('/:id', authorize(), userController.getById);       // all authenticated users

module.exports = router;