import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class MiddleName extends ProfilePage {
    constructor(page) {
        super(page);
    };

    async typeMiddleNameInput(value) {
        await super.typeInput(input.middleNameInput, value);
    };

    async validationMiddleNameInput(value) {
        await super.expectValidation(input.middleNameValidation, value);
    };

    async clearMiddleNameInput() {
        await super.clearInput(input.middleNameInput);
    };

    async middleNameValue() {
        let middleNameValue = await this.page.locator(input.middleNameInput).inputValue();
        return middleNameValue;
    };

};