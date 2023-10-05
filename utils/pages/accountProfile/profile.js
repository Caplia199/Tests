import { expect } from "@playwright/test";
import { button } from "../static/locatorsProfile";

export class ProfilePage {
    constructor(page) {
        this.page = page;
    }

    async typeInput(locator, value) {
        await this.page.locator(locator).type(value);
        await expect(await this.page.locator(locator)).toHaveValue(value);
    };

    async expectValidation(locator, value) {
        await expect(await this.page.locator(locator)).toHaveText(value);
    };

    async clearInput(locator) {
        await this.page.click(locator, { clickCount: 3 });
        await this.page.keyboard.press('Backspace');
    };

    async buttonClick(locator) {
        await this.page.locator(locator).click();
    };

    async buttonIsDisabled(locator){
        await expect(await this.page.locator(locator)).toBeDisabled();
    };

    async buttonIsEnabled(locator){
        await expect(await this.page.locator(locator)).toBeEnabled();
    };
    
};