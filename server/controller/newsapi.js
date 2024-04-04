const axios = require("axios");
const express = require("express");
const router = express.Router();

require("dotenv").config();

const getNewsData = async () => {
  const apiKey = process.env.newsAPI_KEY;
  const apiUrl = `${process.env.NEWSAPI_URL}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    // console.log("me", response.data);

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw new Error("Failed to fetch news data");
  }
};

router.get("/news", async (req, res) => {
  try {
    const newsData = await getNewsData(); // Use the function to fetch news data
    res.json({ articles: newsData }); // Send news data to the client
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).send("Failed to fetch news data");
  }
});

module.exports = router;
