const { loginPageLocators } = require('../statick/locators');

export class Button {
    constructor(page) {
        this.page = page;
    }

    async loginButtonClick(){
        await this.page.click(loginPageLocators.loginButton);
    };

};