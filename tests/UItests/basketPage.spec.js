const { expect } = require('@playwright/test');
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

    test('Add and remove product to bascet', async ({
        mainPage
    }) => {

        await mainPage.elementsIsVisible();
        await mainPage.addProduct('souceLabs');

        let count = await mainPage.howProductInBasket();

        expect(count).toBe('1');

        await mainPage.addProduct('bikeLight');

        count = await mainPage.howProductInBasket();

        expect(count).toBe('2');

        await mainPage.removeProduct('souceLabs');

        count = await mainPage.howProductInBasket();
        
        expect(count).toBe('1');

    });

    test('Add product to bascet', async ({
        mainPage,
        basketPage
    }) => {

        await mainPage.addProduct('souceLabs');
        await mainPage.goToBusket();
        await basketPage.elementsIsVisible();

    });

    test('Buy product', async ({
        mainPage,
        basketPage,
        overview,
        complete
    }) => {

        await mainPage.addProduct('souceLabs');
        await mainPage.goToBusket();
        await basketPage.goToCheckout();
        await basketPage.inputFirstName('User');
        await basketPage.inputLastName('Userovich');
        await basketPage.inputCode('123');
        await basketPage.continue();
        await overview.elementsIsVisible();
        await overview.finish();
        await complete.elementsIsVisible();

    });

    test('The price is the same everywhere', async ({
        mainPage,
        basketPage
    }) => {

        let priceInMainPage = await mainPage.whatPrice();
        await mainPage.addProduct('souceLabs');

        await mainPage.goToBusket();
        await basketPage.elementsIsVisible();

        let priceInBasket = await basketPage.whatPrice();

        await basketPage.goToCheckout();
        await basketPage.inputFirstName('User');
        await basketPage.inputLastName('Userovich');
        await basketPage.inputCode('123');
        await basketPage.continue();

        let priceInCheckout = await basketPage.whatPriceInCheckout();

        expect(priceInMainPage).toBe('$7.99');
        expect(priceInBasket).toBe('$7.99');
        expect(priceInCheckout).toBe('$7.99');

    });

    test('Sort products', async ({
        mainPage,
    }) => {



    });

});
