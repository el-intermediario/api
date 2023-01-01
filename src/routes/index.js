const express = require('express');
// const { upload } = require("../utils/multer");


// Routes.
const authRouter = require('../apiServices/Auth/routes');
const articlesRouter = require('../apiServices/Articles/routes');
const categoriesRouter = require('../apiServices/Categories/routes')
const contactsRouter = require('../apiServices/Contacts/routes');
const tagsRouter = require('../apiServices/Tags/routes');
const adsRouter = require('../apiServices/Ads/routes');
const emailRouter = require('../services/SendEmail');
const usersRouter = require('../apiServices/Users/routes');
const ordersRouter = require('../apiServices/Orders/routes');
const coversRouter = require('../apiServices/Covers/routes');
const cardsRouter = require('../apiServices/Cards/routes');
const customersRouter = require('../apiServices/Customers/routes');
const pagesRouter = require('../apiServices/Pages/routes');
const videosRouter = require('../apiServices/Videos/routes');
const fixtureRouter = require('../apiServices/Fixtures/routes');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/ads', adsRouter);
router.use('/articles', articlesRouter);
router.use('/categories', categoriesRouter);
router.use('/contacts', contactsRouter);
router.use('/tags', tagsRouter);
router.use('/send-email', emailRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/covers', coversRouter);
router.use('/videos', videosRouter);
router.use('/cards', cardsRouter);
router.use('/customers', customersRouter);
router.use('/pages', pagesRouter); 
router.use('/fixtures', fixtureRouter); 

module.exports = router;