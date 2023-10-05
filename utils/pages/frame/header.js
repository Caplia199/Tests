import { siteMenu } from "../static/locatorsMenu";

export class Header {
    constructor(page) {
        this.page = page;
    }

    loginBtn = '[data-testid=login-Button]';
    burgerBtn = '[data-testid=site-menu-open-button]';
    loginLink = '[data-testid = menu-account-link]';
    loggedInBtn = '[data-testid=header-account-link]';

    async openLoginModalByButton(){
        await this.page.locator(this.loginBtn).click();
    };

    async openHeaderLinks(){
        await this.page.locator(this.burgerBtn).click();
    };

    async openLoginModalByLink(){
        await this.page.locator(this.loginLink).click();
    };

    async goToPersonalAccount(){
        await this.page.locator(this.loggedInBtn).click();
    };

    async openLoginModal(){
        await this.page.viewportSize().width < 1024 
            ? await this.openHeaderLinks()
            : undefined
        await this.openLoginModalByButton();
    };

    async clickPersonalAccount() {
        await this.page.locator(siteMenu.personalAccount).click();
    };

    async clickAbout() {
        await this.page.locator(siteMenu.about).click();
    };

    async clickHelp() {
        await this.page.locator(siteMenu.help).click();
    };

    async clickTicketDownload() {
        await this.page.locator(siteMenu.ticketDownload).click();
    };

    async clickTicketSearch() {
        await this.page.locator(siteMenu.ticketSearch).click();
    };

    async changeLanguage() {
        await this.page.click('[data-testid="change-currency-menu-open-button"]');
        await this.page.click('[data-testid="en-locale-button"]');
        await this.page.keyboard.press('Escape');      
    };

}