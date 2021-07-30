const express = require('express');
const { upload } = require("../utils/multer");
const uploadController = require("../apiServices/Upload/controller");

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

router.post("/upload", upload, uploadController.uploadFile);

module.exports = router;