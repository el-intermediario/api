const express = require('express');
// Routes.
const authRouter = require('../apiServices/Auth/routes');
const articlesRouter = require('../apiServices/Articles/routes');
const emailRouter = require('../services/SendEmail');
const usersRouter = require('../apiServices/Users/routes');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/send-email', emailRouter);
router.use('/users', usersRouter);

module.exports = router;