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

test.describe('Validation', () => {

    test('Emty username', async ({
        password,
        loginPage,
    }) => {

        await password.inputValue('secret_sauce');
        await loginPage.loginButtonClick();
        await loginPage.validationIsVisible();
        await loginPage.validationText('Epic sadface: Username is required');

    });

    test('Emty password', async ({
        username, 
        loginPage
    }) => {

        await username.inputValue('standard_user');
        await loginPage.loginButtonClick();
        await loginPage.validationIsVisible();
        await loginPage.validationText('Epic sadface: Password is required');

    });

    test('Bad username', async ({
        username, 
        password,
        loginPage,
    }) => {

        await username.inputValue('fake_user');
        await password.inputValue('secret_sauce');
        await loginPage.loginButtonClick();
        await loginPage.validationIsVisible();
        await loginPage.validationText('Epic sadface: Username and password do not match any user in this service');

    });

    test('Bad password', async ({
        username, 
        password,
        loginPage
    }) => {

        await username.inputValue('standard_user');
        await password.inputValue('fake_password');
        await loginPage.loginButtonClick();
        await loginPage.validationIsVisible();
        await loginPage.validationText('Epic sadface: Username and password do not match any user in this service');

    });

});

