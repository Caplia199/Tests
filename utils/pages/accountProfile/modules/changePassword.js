import { input } from "../../static/locatorsProfile";
const { ProfilePage } = require("../profile");

export class Password extends ProfilePage {
    constructor(page) {
        super(page);
    };

    async typeCurrentInput(value) {
        await super.typeInput(input.currentPasswordInput, value);
    };

    async validationCurrentInput(value) {
        await super.expectValidation(input.currentPasswordValidation, value);
    };

    async clearCurrentInput() {
        await super.clearInput(input.currentPasswordInput);
    };

    async typeNewPasswordInput(value) {
        await super.typeInput(input.newPasswordInput, value);
    };

    async validationNewPasswordInput(value) {
        await super.expectValidation(input.newPasswordValidation, value);
    };

    async clearNewPasswordInput() {
        await super.clearInput(input.newPasswordInput);
    };

    async typeNewPasswordAgain(value) {
        await super.typeInput(input.repaetPasswordInput, value);
    };

    async validationNewPasswordAgain(value) {
        await super.expectValidation(input.repeatPasswordValidation, value);
    };

    async clearNewPasswordAgain() {
        await super.clearInput(input.repaetPasswordInput);
    };
    
};