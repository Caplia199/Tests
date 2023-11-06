// locators.js

const loginPageLocators = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
  };

const errorMassage = '[data-test="error"]';

const mainPageLocators = {
    addButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    header: '[id="header_container"]',
    shoppingCartButton: '[id="shopping_cart_container"]',
    sort: '[data-test="product_sort_container"]',
    menu: '[id="react-burger-menu-btn"]',
    product: '[id="item_4_title_link"]'
  };

  const productPageLocators = {
    addButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    backToProducts: '[data-test="back-to-products"]',
  };

const menu = {
    allItems: '[id="inventory_sidebar_link"]',
    about: '[id="about_sidebar_link"]',
    logout: '[id="logout_sidebar_link"]',
    reset: '[id="reset_sidebar_link"]',
    closeMenu: '[id="react-burger-cross-btn"]',
  };

  module.exports = {
    loginPageLocators,
    mainPageLocators,
    errorMassage,
    menu,
    productPageLocators
  };
  