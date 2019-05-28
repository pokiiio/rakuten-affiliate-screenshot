const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width: 1200,
        height: 800
    });

    await page.goto('https://affiliate.rakuten.co.jp/');

    let items = await page.$$('.fa-sign-in-alt');

    items[1].click();

    await page.waitForNavigation();


    await page.screenshot({
        path: 'rakuten-affiliate.png',
        fullPage: true
    });

    browser.close();
})();