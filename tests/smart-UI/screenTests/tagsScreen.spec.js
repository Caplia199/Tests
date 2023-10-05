const { test } = require('@playwright/test');
const config = require('../config');
const lambda = require('../lib/lambda-func');
const { paintElement } = require('../lib/deleteElement')
const { main } = require('../locators/paintElement')

test('Log in to personal account', async () => {
    
    // Для изменения имени проекта изнутри теста
    config.capabilities['LT:Options'].smartUIProjectName = 'Search by tags';

    const browser = await config.browserConnect.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(config.capabilities))}`,
    });

    const context = await browser.newContext({ headless: false });
    const page = await context.newPage();

    await page.goto(config.use.baseUrl, { timeout: 60000 });

    const mainPage = page.locator('[id="app"]');
    await mainPage.waitFor('title="Anaerobic"', { state: 'attached' });

    // Закрашивает элементы
    for (let key in main) {
        if (key === 'tagBeach') {
            continue;
        };
        await paintElement(page, main[key]);
    };

    await lambda.takeScreen( page, 'Main page' );

    try {
        await lambda.setStatus( page, 'passed', 'Title matched');
        // Клик по тегу
        await page.locator('[data-testid="tag-search-beach"]').click();
        await lambda.takeScreen( page, 'Click on tag' );
        // Выбпать месяц
        await page.locator('[data-testid="tag-search-months-9"]').click();
        await lambda.takeScreen( page, 'Click on September ' );
        // Выбрать даты
        await page.locator('[data-testid="tag-search-flight-period-rt-5-days"]').click();
        await page.waitForSelector('[data-testid="certain-flights0"]');
        await lambda.takeScreen( page, 'Click on date' );
        // Выбрать билет
        await page.locator('[data-testid="certain-flights0"]').click();
        await page.waitForSelector('[id="popover-wrapper"]');
        await lambda.takeScreen( page, 'Choose a ticket' );
    } catch {
        await lambda.setStatus( page, 'failed', 'Title not matched');
    };

    await browser.close();

});

