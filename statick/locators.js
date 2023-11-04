// locators.js

const loginPageLocators = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
  };
  
const mainPageLocators = {
    sortContainer: '[data-test="product_sort_container"]',
    addButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
  };

  module.exports = {
    loginPageLocators,
    mainPageLocators,
  };
  