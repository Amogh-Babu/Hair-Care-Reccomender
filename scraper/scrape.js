const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const scrapeAmazon = async () => {
  const url = 'https://www.amazon.com/s?k=leave+in+conditioner+for+curly+hair';

  const headers = {
    'User-Agent': 'Mozilla/5.0',
    'Accept-Language': 'en-US,en;q=0.9'
  };

  try {
    const { data } = await axios.get(url, { headers });
    const $ = cheerio.load(data);

    const products = [];

    $('.s-result-item').each((_, el) => {
      const name = $(el).find('h2 span').text().trim();
      const link = 'https://www.amazon.com' + $(el).find('a').attr('href');
      const rating = $(el).find('.a-icon-alt').text().trim();
      const reviews = $(el).find('[aria-label$=" ratings"]').text().trim();

      if (name && link && rating) {
        products.push({ name, link, rating, reviews });
      }
    });

    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
    console.log(`Scraped ${products.length} products`);
  } catch (err) {
    console.error('Error scraping:', err);
  }
};

scrapeAmazon();