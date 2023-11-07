const { Page } = require('./page')
const { checkout, checkoutOverview } = require('../statick/locators');

export class BasketPage extends Page {
    constructor(page, locators) {
        super();
        this.page = page;
        this.locators = locators;
    }

    async whatPrice(){
        const priceElement = await this.page.locator('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div').first();
        const price = await priceElement.textContent();
        return price;
    };

    async goToCheckout(){
        await super.buttonClick(this.locators.checkout);
    };

    async inputFirstName(value){
        await this.page.locator(checkout.firstName).type(value);
    };

    async inputLastName(value){
        await this.page.locator(checkout.lastName).type(value);
    };

    async inputCode(value){
        await this.page.locator(checkout.code).type(value);
    };

    async continue(){
        await this.page.locator(checkout.continue).click();
    };

    async finish(){
        await this.page.locator(checkoutOverview.finish).click();
    };

    async whatPriceInCheckout(){
        const priceElement = await this.page.locator('//*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[2]/div[2]/div').first();
        const price = await priceElement.textContent();
        return price;
    };

};

