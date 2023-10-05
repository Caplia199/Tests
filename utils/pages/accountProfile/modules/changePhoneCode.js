import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class PhoneCode extends ProfilePage {
    constructor(page) {
        super(page);
        this.page = page;
    };

    async typePhoneCodeInput( value) {
        await this.page.locator(input.phoneCodeInput).type(value);
    };

    async validationPhoneCodeInput() {
        await this.page.getByPlaceholder("No options").isVisible();
    };

    async clearPhoneCodeInput() {
        await super.clearInput(input.phoneCodeInput);
    };

    async phoneCodeValue() {
        let phoneCodeValue = await this.page.locator(input.phoneCodeInput).inputValue();
        return phoneCodeValue;
    };

};