const express = require('express');
// Routes.
const authRouter = require('../apiServices/Auth/routes');
const articlesRouter = require('../apiServices/Articles/routes');
const marketsRouter = require('../apiServices/Markets/routes');
const emailRouter = require('../services/SendEmail');
const uploadRouter = require('../apiServices/Uploads/UploadRoutes');
const usersRouter = require('../apiServices/Users/routes');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/markets', marketsRouter);
router.use('/send-email', emailRouter);
router.use('/upload', uploadRouter);
router.use('/users', usersRouter);

module.exports = router;