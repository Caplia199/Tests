import { accountMenu} from "../static/locatorsMenu";

export class Menu {
    constructor(page) {
        this.page = page;
    }

    async clickOrders() {
        await this.page.locator(accountMenu.orders).click();
    };

    async clickProfile() {
        await this.page.locator(accountMenu.profile).click();
    };

    async clickPassengers() {
        await this.page.locator(accountMenu.passengers).click();
    };

    async clickChat() {
        await this.page.locator(accountMenu.chatWithSupport).click();
    };
};

