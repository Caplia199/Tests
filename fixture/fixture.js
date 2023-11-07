const base = require('@playwright/test');
const { Input } = require('../utils/input');
const { Page } = require('../utils/page');
const { MainPage } = require('../utils/mainpage');
const { BasketPage } = require('../utils/basketPage');
const { 
    loginPageLocators, 
    mainPageLocators, 
    errorMassage, 
    basketPageLocators, 
    checkoutOverview, 
    checkoutComplete 
} = require('../statick/locators');

exports.test = base.test.extend({
    username: async ({ page }, use) => {
        await use(new Input(page, loginPageLocators.usernameInput));
    },
    password: async ({ page }, use) => {
        await use(new Input(page, loginPageLocators.passwordInput));
    },
    loginPage: async ({ page }, use) => {
        await use(new Page(page, loginPageLocators, errorMassage));
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page, mainPageLocators));
    },
    basketPage: async ({ page }, use) => {
        await use(new BasketPage(page, basketPageLocators));
    },
    overview: async ({ page }, use) => {
        await use(new BasketPage(page, checkoutOverview));
    },
    complete: async ({ page }, use) => {
        await use(new BasketPage(page, checkoutComplete));
    },
});

exports.expect = base.expect;