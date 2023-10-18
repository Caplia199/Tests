const { test } = require('@playwright/test');
const config = require('../config');
const lambda = require('../lib/lambda-func');
const { paintElement } = require('../../lib/deleteElement')
const { main } = require('../locators/paintElement')

test('Log in to personal account', async () => {
    
    // Для изменения имени проекта изнутри теста
    config.capabilities['LT:Options'].smartUIProjectName = 'Login form';

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
        // Вход по почте
        await page.locator('[id="login-Button"]').click();
        await lambda.takeScreen( page, 'Log in with mail' );
        // Напомнить пароль
        await page.locator('[id="login-Form-Recover-Password-Button"]').click();
        await lambda.takeScreen( page, 'Remind password' );
        await page.locator('[data-testid="login-By-Sms-Choose-Email-FormGo-To-Login-Button"]').click();
        // Вход по номеру
        await page.locator('[data-testid="login-Form-Login-By-SMS-Button"]').click();
        await lambda.takeScreen( page, 'Log in with number' );
    } catch {
        await lambda.setStatus( page, 'failed', 'Title not matched');
    };

    await browser.close();

});

