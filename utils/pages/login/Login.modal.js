import { expect } from "@playwright/test";

export class LoginModal {
    constructor(page) {
        this.page = page;
    }

    // Locators
    modalTitle = '.index-title-Apwej';
    remindBtn = '[id=login-Form-Recover-Password-Button]';
    remindMessage = '.index-recoverSuccess-cv_tq';
    downloadTicket = '[data-testid=login-Form-Download-Ticket-Button]';
    closeButton = '[data-testid=popup-close-button]';
    loginByPhoneModal = '[data-testid=login-Form-Login-By-SMS-Button]';
    loginByEmailModal = '[data-testid=login-Form-Login-By-Email-Button]';
    returnToAuth;


    // Text Data
    newPasswordMessage = 'Новый пароль отправлен на ваш email'

    async loginByEmail() {
        await this.page.getByText('По электронной почте').click();
    };

    async loginByPhone() {
        await this.page.locator(this.loginByPhoneModal).click();
    };

    async closeModal() {
        await this.page.locator(this.closeButton).click();
    };

    async submitForm() {
        await this.page.locator(this.submitBtn).click();
    };

    async remindPassword() {
        await this.page.locator(this.remindBtn).click();
    };

    async expectRemindPasswordMessageShown() {
        await expect(await this.page.locator(this.remindMessage)).toHaveText(this.newPasswordMessage);
    };

    async downloadTicket() {
        await this.page.locator(this.downloadTicket).click();
    };

    async returnToAuth() {
        await this.page.locator(this.returnToAuth).click();
    };

    async expectSubmitButtonIsDisabled(){
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
    };
};