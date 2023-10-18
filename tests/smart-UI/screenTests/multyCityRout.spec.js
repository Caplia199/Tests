const { test } = require('@playwright/test');
const config = require('../config');
const lambda = require('../lib/lambda-func');
const { paintElement } = require('../../lib/deleteElement')
const { main } = require('../locators/paintElement')

test('Log in to personal account', async () => {
    
    // Для изменения имени проекта изнутри теста
    config.capabilities['LT:Options'].smartUIProjectName = 'Multi city rout';

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
        await paintElement(page, main[key]);
    };

    await lambda.takeScreen( page, 'Main page' );

    try {
        await lambda.setStatus( page, 'passed', 'Title matched');
        // Сложный маршрут
        await page.locator('[data-testid="search-Form-Type-ChangerButton"]').click();
        await lambda.takeScreen( page, 'Multi city rout' );
        // +1 маршрут
        await page.locator('[data-testid="searchFormComplexPlusSegment"]').click();
        await lambda.takeScreen( page, 'Multi city rout 2' );
        // еще +1 маршрут
        await page.locator('[data-testid="searchFormComplexPlusSegment"]').click();
        await lambda.takeScreen( page, 'Multi city rout 3' );
        // Вернуться к обычному маршруту
        await page.locator('[id="search-Form-Type-ChangerButton"]').click();

        for (let key in main) {
            await paintElement(page, main[key]);
        };
        
        await lambda.takeScreen( page, 'Back to one way' );
    } catch {
        await lambda.setStatus( page, 'failed', 'Title not matched');
    };

    await browser.close();

});
