const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://affiliate.rakuten.co.jp/');
    await page.screenshot({
        path: 'rakuten-affiliate.png',
        fullPage: true
    });

    browser.close();
})();