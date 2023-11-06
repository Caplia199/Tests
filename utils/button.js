const { loginPageLocators } = require('../statick/locators');

export class Button {
    constructor(page) {
        this.page = page;
    }

    async loginButtonClick(){
        await this.buttonClick(loginPageLocators.loginButton);
    };

    async buttonClick(locator){
        await this.page.click(locator);
    };

};