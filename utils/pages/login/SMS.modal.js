import { expect } from "@playwright/test";
const { LoginModal } = require('../login/Login.modal');

export class SMSModal extends LoginModal {
    constructor(page) {
        super();
        this.page = page;
    }

    // Locators
    modal = '[id=recover-Access-Code-Form]';
    modalTitle = '.makeStyles-popupWrapper-5';
    message = '.index-subtitle-NB1p5';
    codeInput = '[data-testid=accessCode-input]';
    submitBtn = '#recover-Access-Code-Form-Submit-Button';
    getNewCode = '[id=recover-Access-Code-Form-Resend-Code-Button]';
    timer = '.index-resendTime-Vwksm';
    returnToAuth = '[id=recover-Access-Code-Form-Go-To-Login-Button]';

    // Text Data
    

    async modalIsLoaded() {
        await expect(await this.page.locator(this.modal)).toBeVisible();
        await expect(await this.page.locator(this.codeInput)).toHaveValue('');
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
        await expect(await this.page.locator(this.getNewCode)).not.toBeVisible();
        await expect(await this.page.locator(this.returnToAuth)).toBeEnabled();
        await expect(await this.page.locator(this.timer)).toBeVisible();
        await expect(await this.page.locator(this.message)).toBeVisible();
    };

    async fillPhoneCode(phoneCode){
        await this.page.locator(this.codeInput).type(phoneCode);
    };

    async getNewCode(){
        await this.page.locator(this.getNewCode).click();
    };    
};