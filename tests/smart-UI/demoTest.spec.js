const { chromium } = require('playwright-core');
const { test } = require('@playwright/test');
const config = require('./config')

test('Main page', async () => {
    
    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(config.capabilities))}`,
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(config.use.baseUrl);
    const title = await page.title();

    try {
        const expectedTitle = 'Всё начинается с билета!';
        if (title === expectedTitle) {
            await page.evaluate((_) => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`);
            await page.evaluate((_) => { }, `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'Main page' } })}`);
        } else {
            throw new Error('Title not matched');
        }
    } catch {
        await page.evaluate((_) => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`);
    }


    await browser.close();
});

