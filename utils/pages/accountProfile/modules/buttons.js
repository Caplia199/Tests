import { button } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class Button extends ProfilePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async saveChangesClick() {
        await super.buttonClick(button.saveChanges);
    };

    async saveChangesIsDisabled(){
        await super.buttonIsDisabled(button.saveChanges);
    };

    async saveChangesIsEnabled(){
        await super.buttonIsEnabled(button.saveChanges);
    };

    async savePasswordClick() {
        await super.buttonClick(button.savePassword);
    };

    async savePasswordIsDisabled(){
        await super.buttonIsDisabled(button.savePassword);
    };

    async savePasswordIsEnabled(){
        await super.buttonIsEnabled(button.savePassword);
    };

    async showCurrentPassword() {
        await super.buttonClick(button.showCurrentPassword);
    };

    async showNewPassword() {
        await super.buttonClick(button.showNewPassword);
    };

    async showNewConfirmPassword() {
        await super.buttonClick(button.showNewConfirmPassword);
    };
    
};