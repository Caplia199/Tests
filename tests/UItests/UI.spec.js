const { test } = require('../../fixture/fixture.js');

let veiwPortWidth;

test.beforeEach(async ({ page }) => {

    veiwPortWidth = page.viewportSize().width;
    await page.goto('/');
    
}); 

test.describe('Login', () => {

    test('Static elements', async ({
        loginPage
    }) => {

        await loginPage.elementsIsVisible()

    });

    test('With correct email and password', async ({
        username, 
        password,
        loginPage,
        mainPage
    }) => {

        await username.inputValue('standard_user');
        await password.inputValue('secret_sauce');
        await loginPage.loginButtonClick();
        await mainPage.elementsIsVisible();

    });

});