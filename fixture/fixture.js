const base = require('@playwright/test');
const { Input } = require('../utils/input');
const { Page } = require('../utils/page');
const { MainPage } = require('../utils/mainpage');
const { loginPageLocators, mainPageLocators, errorMassage } = require('../statick/locators');

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
});

exports.expect = base.expect;