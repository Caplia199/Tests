const { test } = require('@playwright/test');
const config = require('../config');
const lambda = require('../lib/lambda-func');
const { paintElement } = require('../lib/deleteElement')
const { main } = require('../locators/paintElement')

test('Log in to personal account', async () => {
    
    // Для изменения имени проекта изнутри теста
    config.capabilities['LT:Options'].smartUIProjectName = 'Search form';

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
        // Откуда
        await page.locator('[data-testid="iata-selector-input-from0"]').click();
        await lambda.takeScreen( page, 'Input from' );
        // Куда
        await page.locator('[data-testid="iata-selector-input-to0"]').click();
        await lambda.takeScreen( page, 'Input to' );
        // Когда (календарь)
        await page.locator('[data-testid="searchForm-Simple-Widget-Calendar-0-Show-Calendar-Button"]').click();
        await lambda.takeScreen( page, 'Calendar 1' );
        // Обратно (календарь)
        await page.locator('[data-testid="searchForm-Simple-Widget-Calendar-1-Show-Calendar-Button"]').click();
        await lambda.takeScreen( page, 'Calendar 2' );
        // Кол-во пассажиров
        await page.locator('[data-testid="search-form-widget-travellers-show-dropdown-button"]').click();
        await lambda.takeScreen( page, 'Travellers' );
    } catch {
        await lambda.setStatus( page, 'failed', 'Title not matched');
    };

    await browser.close();

});
