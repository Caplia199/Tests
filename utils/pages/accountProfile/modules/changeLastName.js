import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class LastName extends ProfilePage {
    constructor(page) {
        super(page);
    };

    async typeLastNameInput(value) {
        await super.typeInput(input.lastNameInput, value);
    };

    async validationLastNameInput(value) {
        await super.expectValidation(input.lastNameValidation, value);
    };

    async clearLastNameInput() {
        await super.clearInput(input.lastNameInput);
    };

    async lastNameValue() {
        let LastNameValue = await this.page.locator(input.lastNameInput).inputValue();
        return LastNameValue;
    };

};