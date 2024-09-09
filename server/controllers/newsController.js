// controllers/newsController.js
const axios = require('axios');

// Fetch top headlines with pagination
exports.getNews = async (req, res) => {
  const page = req.query.page || 1;      // Default to page 1
  const limit = req.query.limit || 10;   // Default to 10 articles per page

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines`,
      {
        params: {
          token: process.env.GNEWS_API_KEY,
          lang: 'en',
          page: page,
          max: limit,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ message: 'Error fetching news' });
  }
};

// Search news based on query, region, and category
exports.searchNews = async (req, res) => {
  const { query, region, category, page, limit } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search`,
      {
        params: {
          q: query,
          token: process.env.GNEWS_API_KEY,
          lang: 'en',
          country: region || '',
          topic: category || '',
          page: page || 1,
          max: limit || 10,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error searching news:', error.message);
    res.status(500).json({ message: 'Error searching news' });
  }
};
