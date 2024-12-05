const { scrapeArticle } = require('./scraper/articleScraper');
const { saveDataToFile } = require('./scraper/utils');
const urls = require('./config/urls');

async function main() {
    const results = [];
    for (const url of urls) {
        console.log(`Scraping: ${url}`);
        const articleData = await scrapeArticle(url);
        if (articleData) results.push(articleData);
    }

    // Guardar los datos en un archivo JSON
    console.log(results)
    saveDataToFile(results, 'articles.json');
    console.log('Scraping completado. Datos guardados en data/articles.json');
}

main();
