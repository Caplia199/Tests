// locators.js

const loginPageLocators = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
  };

const errorMassage = '[data-test="error"]';

const mainPageLocators = {
    souceLabs: '[data-test="add-to-cart-sauce-labs-onesie"]',
    header: '[id="header_container"]',
    shoppingCartButton: '[id="shopping_cart_container"]',
    sort: '[data-test="product_sort_container"]',
    menu: '[id="react-burger-menu-btn"]',
    product: '[id="item_4_title_link"]',
    bikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
  };

const basketPageLocators = {
    onesie: '[id="item_2_title_link"]',
    onesieRemove: '[data-test="remove-sauce-labs-onesie"]',
    continueShopping: '[data-test="continue-shopping"]',
    checkout: '[data-test="checkout"]',
  };

const checkout = {
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    code: '[data-test="postalCode"]',
    continue: '[data-test="continue"]',
  };

const checkoutOverview = {
    product: '[id="item_2_title_link"]',
    cancel: '[data-test="cancel"]',
    finish: '[data-test="finish"]',
  };

const checkoutComplete = {
    complete: '[id="checkout_complete_container"]',
    backToProducts: '[data-test="back-to-products"]',
  };

const removeProductLocators = {
    souceLabs: '[data-test="remove-sauce-labs-onesie"]',
    bikeLight: '[data-test="remove-sauce-labs-bike-light"]',
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
    productPageLocators,
    removeProductLocators,
    basketPageLocators,
    checkout,
    checkoutOverview,
    checkoutComplete
  };
  