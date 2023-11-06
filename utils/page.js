const { expect } = require('@playwright/test');
const { Button } = require('./button')

export class Page extends Button {
    constructor(page, locators, errorMassage) {
        super();
        this.page = page;
        this.locators = locators;
        this.errorMassage = errorMassage;
    }

    async elementsIsVisible(){
        for (let key in this.locators) {
            await expect(await this.page.locator(this.locators[key])).toBeVisible();
        };
    };

    async validationIsVisible(){
        await expect(await this.page.locator(this.errorMassage)).toBeVisible();
    };

    async validationText(text){
        await expect(await this.page.locator(this.errorMassage)).toHaveText(text);
    };

};