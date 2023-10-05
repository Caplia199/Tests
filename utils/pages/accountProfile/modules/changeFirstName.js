import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class FirstName extends ProfilePage {
    constructor(page) {
        super(page);
    };

    async typeFirstNameInput(value) {
        await super.typeInput(input.firstNameInput, value);
    };

    async validationFirstNameInput(value) {
        await super.expectValidation(input.firstNameValidation, value);
    };

    async clearFirstNameInput() {
        await super.clearInput(input.firstNameInput);
    };

    async firstNameValue() {
        let firstNameValue = await this.page.locator(input.firstNameInput).inputValue();
        return firstNameValue;
    };
};