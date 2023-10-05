import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class PhoneNumber extends ProfilePage {
    constructor(page) {
        super(page);
        this.page = page;
    };

    async typePhoneNumberInput( value) {
        await this.page.locator(input.phoneNumberInput).type(value);
    };

    async validationPhoneNumberInput(value) {
        await super.expectValidation(input.phoneNumberValidation, value);
    };

    async clearPhoneNumberInput() {
        await super.clearInput(input.phoneNumberInput);
    };

    async phoneNumberValue() {
        let phoneNumberValue = await this.page.locator(input.phoneNumberInput).inputValue();
        return phoneNumberValue;
    };

    async phoneNumberClick() {
        await this.page.locator(input.phoneNumberInput).click();
    };

};