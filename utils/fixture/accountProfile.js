const base = require('@playwright/test');
const { Header } = require('../pages/frame/header');
const { EmailModal } = require('../pages/login/Email.modal');
const { Menu } = require('../pages/frame/accountMenu');
const { LastName } = require('../pages/accountProfile/modules/changeLastName');
const { FirstName } = require('../pages/accountProfile/modules/changeFirstName');
const { MiddleName } = require('../pages/accountProfile/modules/changeMiddleName');
const { Birthday } = require('../pages/accountProfile/modules/changeBirthday');
const { PhoneNumber } = require('../pages/accountProfile/modules/changePhoneNumber');
const { PhoneCode } = require('../pages/accountProfile/modules/changePhoneCode');
const { Password } = require('../pages/accountProfile/modules/changePassword');
const { Button } = require('../pages/accountProfile/modules/buttons');
const { Gender } = require('../pages/accountProfile/modules/changeGender');

exports.test = base.test.extend({

    header: async ({ page }, use) => {
        await use(new Header(page));
    },  
    emailModal: async ({ page }, use) => {
        await use(new EmailModal(page));
    },
    menu: async ({ page }, use) => {
        await use(new Menu(page));
    }, 
    button: async ({ page }, use) => {
        await use(new Button(page));
    },
    lastName: async ({ page }, use) => {
        await use(new LastName(page));
    },
    firstName: async ({ page }, use) => {
        await use(new FirstName(page));
    }, 
    middleName: async ({ page }, use) => {
        await use(new MiddleName(page));
    },
    birthday: async ({ page }, use) => {
        await use(new Birthday(page));
    },
    phoneNumber: async ({ page }, use) => {
        await use(new PhoneNumber(page));
    },
    phoneCode: async ({ page }, use) => {
        await use(new PhoneCode(page));
    },
    password: async ({ page }, use) => {
        await use(new Password(page));
    },
    gender: async ({ page }, use) => {
        await use(new Gender(page));
    }
});

exports.expect = base.expect;
