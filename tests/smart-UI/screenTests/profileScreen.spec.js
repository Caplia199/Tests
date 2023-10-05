const { test } = require('@playwright/test');
const config = require('../config');
const lambda = require('../lib/lambda-func');
const { paintElement } = require('../lib/deleteElement')
const { main, profile } = require('../locators/paintElement')

test('Profile in personal account', async () => {
    
    // Для изменения имени проекта изнутри теста
    config.capabilities['LT:Options'].smartUIProjectName = 'Profile';

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
    // Вход по почте
    await page.locator('[id="login-Button"]').click();
    await page.fill('[data-testid="user-Email-input"]', config.use.email);
    await page.fill('[data-testid="userPassword-input"]', config.use.password);
    await page.locator('[data-testid="login-Form-Submit-Button"]').click();

    await page.locator('[data-testid="header-account-link"]').click();
    await page.locator('[data-testid="account-nav-link-profile"]').click();

    // Закрашивает элементы в профиле
    for (let key in profile) {
      await paintElement(page, profile[key]);
    };

    try {
        await lambda.setStatus( page, 'passed', 'Title matched');
        
        await page.evaluate((_) => { }, `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'Profile page',ignoreDOM:{"id":["profile-gender-input"]} } })}`);

        // await lambda.takeScreen( page, 'Profile page' );

        await page.click('[data-testid="profile-phone-number-input"]');
        await page.keyboard.press('Backspace');
        await lambda.takeScreen( page, 'Save button is enabled' );

        await page.click('[data-testid="profile-phone-number-input"]');
        for (let i = 0; i < 8; i++) {
          await page.keyboard.press('Backspace');
          };
        await lambda.takeScreen( page, 'Number validation' );

        await page.click('[id="profile-birthday-input"]');
        for (let i = 0; i < 2; i++) {
          await page.keyboard.press('Backspace');
          };
        await lambda.takeScreen( page, 'Date of birth validation' );

        await page.click('[data-testid="profile-firstName-input"]');
        for (let i = 0; i < 10; i++) {
          await page.keyboard.press('Backspace');
          };
        await lambda.takeScreen( page, 'Firs name validation' );

    } catch {
        await lambda.setStatus( page, 'failed', 'Title not matched');
    };

    await browser.close();

});


