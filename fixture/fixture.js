const base = require('@playwright/test');
const { Input } = require('../utils/input');
const { LoginPage } = require('../utils/page');
const { loginPageLocators, mainPageLocators } = require('../statick/locators');

exports.test = base.test.extend({
    username: async ({ page }, use) => {
        await use(new Input(page, loginPageLocators.usernameInput));
    },
    password: async ({ page }, use) => {
        await use(new Input(page, loginPageLocators.passwordInput));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page, loginPageLocators));
    },
    mainPage: async ({ page }, use) => {
        await use(new LoginPage(page, mainPageLocators));
    },
});

exports.expect = base.expect;