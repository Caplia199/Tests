import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class Birthday extends ProfilePage {
    constructor(page) {
        super(page);
        this.page = page;
    };

    async birthdayInputClick() {
        await this.page.locator(input.birhdayInput).click();
    };

    async typeBirthdayInput( value) {
        await this.page.locator(input.birhdayInput).type(value);
    };

    async validationBirthdayInput(value) {
        await super.expectValidation(input.birthdayValidation, value);
    };

    async clearBirthdayInput() {
        await super.clearInput(input.birhdayInput);
    };

    async birthdayValue() {
        let birthdayValue = await this.page.locator(input.birhdayInput).inputValue();
        return birthdayValue;
    };

    async birthdayLabel() {
        let birthdayValue = await this.page.locator(input.birhdayLabel).textContent();
        return birthdayValue;
    };

};