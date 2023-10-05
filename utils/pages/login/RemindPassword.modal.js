import { expect } from "@playwright/test";
const { LoginModal } = require('../login/Login.modal');

export class RemindModal extends LoginModal {
    constructor(page) {
        super();
        this.page = page;
    }

    modal = '[id = recover-Password-Form]';
    modalTitle = '.makeStyles-popupWrapper-5';
    emailInput = '[data-testid=userEmail-input]';
    submitBtn = '[data-testid=recover-Password-Form-Submit-Button]';
    returnToAuth = '[data-testid = login-By-Sms-Choose-Email-FormGo-To-Login-Button]';

    async modalIsLoaded(){
        await expect(await this.page.locator(this.modal)).toBeVisible();
        await expect(await this.page.locator(this.emailInput)).toHaveValue('');
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
        await expect(await this.page.locator(this.returnToAuth)).toBeEnabled();
    };
    
    async typeEmailInput(email){
        await this.page.locator(this.emailInput).type(email);
    };
};