const { expect } = require('@playwright/test');
const { Button } = require('./button')

export class LoginPage extends Button {
    constructor(page, locators) {
        super();
        this.page = page;
        this.locators = locators;
    }

    async elementsIsVisible(){

        for (let key in this.locators) {
            await expect(await this.page.locator(this.locators[key])).toBeVisible();
        };

    };

};