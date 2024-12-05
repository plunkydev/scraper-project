const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeArticle(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $('meta[property="og:title"]').attr('content') || $('title').text();
        const description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');

        return { title, description, image, url };
    } catch (error) {
        console.error(`Error scraping ${url}:`, error.message);
        return null;
    }
}

module.exports = { scrapeArticle };
