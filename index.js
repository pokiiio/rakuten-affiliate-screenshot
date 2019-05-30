const puppeteer = require('puppeteer');
const id = require('./id.js');

// id.js is like...
// module.exports = {
//     username: 'username',
//     password: 'password'
// };

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

    await page.waitForNavigation({
        waitUntil: "domcontentloaded"
    });

    await page.type("#loginInner_u", id.username);
    await page.type("#loginInner_p", id.password);

    items = await page.$$('.loginButton');
    items[0].click();

    await page.waitForNavigation({
        waitUntil: "domcontentloaded"
    });

    await page.goto('https://affiliate.rakuten.co.jp/');

    await page.screenshot({
        path: 'rakuten-affiliate.png',
        fullPage: true
    });

    browser.close();
})();