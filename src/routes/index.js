const express = require('express');
const { upload } = require("../utils/multer");
const uploadController = require("../apiServices/Upload/controller");

// Routes.
const authRouter = require('../apiServices/Auth/routes');
const articlesRouter = require('../apiServices/Articles/routes');
const categoriesRouter = require('../apiServices/Categories/routes');
const contactsRouter = require('../apiServices/Contacts/routes');
const tagsRouter = require('../apiServices/Tags/routes');
const adsRouter = require('../apiServices/Ads/routes');
const emailRouter = require('../services/SendEmail');
const usersRouter = require('../apiServices/Users/routes');
const orderRouter = require('../apiServices/Orders/routes');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/ads', adsRouter);
router.use('/articles', articlesRouter);
router.use('/categories', categoriesRouter);
router.use('/contacts', contactsRouter);
router.use('/tags', tagsRouter);
router.use('/send-email', emailRouter);
router.use('/users', usersRouter);
router.use('/orders', orderRouter);

router.post("/upload", upload, uploadController.uploadFile);

module.exports = router;