const { test } = require('../../fixture/fixture.js');


test.beforeEach(async ({
    page,
    username, 
    password,
    loginPage
}) => {

    await page.goto('/');
    await username.inputValue('standard_user');
    await password.inputValue('secret_sauce');
    await loginPage.loginButtonClick();

}); 

test.describe('Main page', () => {

    test('Static elements', async ({
        mainPage
    }) => {

        await mainPage.elementsIsVisible();

    });

    test('Logout', async ({
        mainPage,
        loginPage
    }) => {

        await mainPage.openMenu();
        await mainPage.logout();
        await loginPage.elementsIsVisible();

    });

    test('Product page', async ({
        mainPage,
    }) => {

        await mainPage.openProduct();
        await mainPage.backToProducts();
        await mainPage.elementsIsVisible();

    });

    test('Sort products', async ({
        mainPage,
    }) => {

        await mainPage.sortOpen();
        await mainPage.sortBy('za');
        await mainPage.expectSort('Name (Z to A)');
        await mainPage.sortBy('lohi');
        await mainPage.expectSort('Price (low to high)');
        await mainPage.sortBy('hilo');
        await mainPage.expectSort('Price (high to low)');
        await mainPage.sortBy('az');
        await mainPage.expectSort('Name (A to Z)');

    });

});
