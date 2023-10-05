import { input } from "../../static/locatorsProfile";

export class Gender {
    constructor(page) {
        this.page = page;
    };

    async genderClick() {
        await this.page.locator(input.gender).click();
    };

    async man() {
        await this.page.locator(input.genderMan).click();
    };

    async woman() {
        await this.page.locator(input.genderWoman).click();
    };

    async genderValue() {
        const gender = await this.page.locator(input.gender).textContent();
        return gender;
    };

};