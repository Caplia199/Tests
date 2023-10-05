import { expect } from "@playwright/test";
const { LoginModal } = require('../login/Login.modal');

export class PhoneModal extends LoginModal {
    constructor(page) {
        super();
        this.page = page;
    }

    // Locators
    modal = '[id = login-By-Sms-Form]';
    countryCodeInput = '[data-testid=UserPhone-code-input]';
    dropdownBtn = '.MuiAutocomplete-endAdornment';
    phoneNumberInput = '[data-testid=UserPhone-number-input]';
    submitBtn = '[data-testid = login-by-sms-form-submit-button]';
    remindBtn = '[id="login-Form-Recover-Password-Button"]';
    downloadTicket = '[data-testid="login-Form-Download-Ticket-Button"]';
    dropdownCountry = '[data-testid = UserPhone-code-option-0]';

    async modalIsLoaded() {
        await expect(await this.page.locator(this.modal)).toBeVisible();
        await expect(await this.page.locator(this.countryCodeInput).nth(0)).toBeEnabled();
        await expect(await this.page.locator(this.dropdownBtn)).toBeEnabled();
        await expect(await this.page.locator(this.phoneNumberInput)).toHaveValue('');
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
        await expect(await this.page.locator(this.remindBtn)).toBeEnabled();
        await expect(await this.page.locator(this.downloadTicket)).toBeEnabled();
    };

    async openPhoneCodeDropDown() {
        await this.page.locator(this.countryCodeInput).nth(0).click();
    };

    async fillCountryCodeInput(countryCode) {
        await this.page.locator(this.countryCodeInput).nth(0).click();
        await this.page.locator(this.countryCodeInput).nth(0).type(countryCode);
        await this.page.getByText(countryCode).click();
    };

    async fillPhoneNumberInput(phoneNumber) {
        await this.page.locator(this.phoneNumberInput).type(phoneNumber);
    };

    async selectCountryFromDropDown(phoneCode) {
        await this.page.getByText(phoneCode).click();
    };

    async expectCodeInputHaveValue(code) {
        await expect(await this.page.locator(this.countryCodeInput).nth(1)).toHaveValue(code);
    };

    async expectPhoneInputHaveValue(phone) {
        await expect(await this.page.locator(this.phoneNumberInput)).toHaveValue(phone);
    };
};