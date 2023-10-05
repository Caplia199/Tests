import { expect } from "@playwright/test";
const { LoginModal } = require('../login/Login.modal');

export class EmailModal extends LoginModal {
    constructor(page) {
        super();
        this.page = page;
    }

    // Locators
    modal = '[id = login-Form]';
    emailInput = '[data-testid=user-Email-input]';
    passwordInput = '[data-testid=userPassword-input]';
    submitBtn = '[data-testid=login-Form-Submit-Button]';
    remindBtn = '[data-testid = login-Form-Recover-Password-Button]';
    showPasswordBtn = '[id=userPassword-show-hide-button]';
    downloadTicket = '[data-testid = login-Form-Download-Ticket-Button]';
    errorPasswordMessage = '[id="userPassword-input-helper-text"]';
    errorEmailMessage = '[id=user-Email-input-helper-text]';

    // Text Data
    wrongPasswordMessage = 'Неверный пароль';
    wrongEmailMessage = 'Пользователь не зарегистрирован или неверно указан email'

    async modalIsLoaded() {
        await expect(await this.page.locator(this.modal)).toBeVisible();
        await expect(await this.page.locator(this.emailInput)).toHaveValue('');
        await expect(await this.page.locator(this.passwordInput)).toHaveValue('');
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
        await expect(await this.page.locator(this.remindBtn)).toBeEnabled();
        await expect(await this.page.locator(this.downloadTicket)).toBeEnabled();
        await expect(await this.page.locator(this.showPasswordBtn)).toBeEnabled();
    };

    async typeEmailInput(email) {
        await this.page.locator(this.emailInput).type(email);
        await expect(await this.page.locator(this.emailInput)).toHaveValue(email);
    };

    async fillEmailInput(email) {
        await this.page.locator(this.emailInput).fill(email);
        await expect(await this.page.locator(this.emailInput)).toHaveValue(email);
    };

    async typePasswordInput(password) {
        await this.page.locator(this.passwordInput).type(password);
        await expect(await this.page.locator(this.passwordInput)).toHaveValue(password);
    };

    async showPassword() {
        await this.page.locator(this.showPasswordBtn).click();
    };

    async expectErrorPasswordMessageShown() {
        await expect(await this.page.locator(this.errorPasswordMessage)).toHaveText(this.wrongPasswordMessage);
    };

    async expectErrorEmailMessageShown() {
        await expect(await this.page.locator(this.errorEmailMessage)).toHaveText(this.wrongEmailMessage);
    };

    async expectEmailInputHaveValue(email){
        await expect (await this.page.locator(this.emailInput)).toHaveValue(email);
    };

    async expectPasswordInputHaveValue(password){
        await expect (await this.page.locator(this.passwordInput)).toHaveValue(password);
    };

    async expectPasswordIsHidden() {
        const passType = await this.page.locator(this.passwordInput).getAttribute('type');
        expect(passType).toBe('password');
    };

    async expectPasswordIsVisible() {
        const passType = await this.page.locator(this.passwordInput).getAttribute('type');
        expect(passType).toBe('text');
    };
};