const { expect } = require('@playwright/test');

export class Input {
    constructor(page, locator, validationLocator) {
        this.page = page;
        this.locator = locator;
        this.validationLocator = validationLocator;

    }

    async inputValue(value){
        await this.page.locator(this.locator).type(value);
        await expect(await this.page.locator(this.locator)).toHaveValue(value);
    };

    async clearInput() {
        await this.page.click(this.locator, { clickCount: 3 });
        await this.page.keyboard.press('Backspace');
    };

    async placeholderIsVisible(placeholder){
        await this.page.getByPlaceholder(placeholder).isVisible();
    };

    async validationIsVisible(text){
        await this.page.locator(this.validationLocator).toHaveText(text);
    };

};