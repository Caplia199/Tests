import { expect } from "@playwright/test";
const { LoginModal } = require('../login/Login.modal');

export class ChooseEmailModal extends LoginModal {
    constructor(page) {
        super();
        this.page = page;
    }

    modal = '[id=login-By-Sms-Choose-Email-Form]';
    emailList = '[id = login-By-Sms-Choose-Email-Form-Emails-List]';
    submitBtn = '[data-testid = login-By-Sms-Choose-Email-Form-Submit-Button]';
    returnToAuth = '[id=login-By-Sms-Choose-Email-FormGo-To-Login-Button]';

    async modalIsLoaded(){
        await expect(await this.page.locator(this.modal)).toBeVisible();
        await expect(await this.page.locator(this.emailList)).toBeVisible();
        await expect(await this.page.locator(this.submitBtn)).toBeDisabled();
        await expect(await this.page.locator(this.returnToAuth)).toBeEnabled();
    };
    
    async chooseEmail(email) {
        await this.page.getByText(email).click();
    };

    async submitForm(){
        await this.page.locator(this.submitBtn).click();
    };

    
};