// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const { getNews, searchNews } = require('../controllers/newsController');

// Route to fetch paginated news
router.get('/news', getNews);

// Route for searching news by keyword, region, or category
router.get('/news/search', searchNews);

module.exports = router;
