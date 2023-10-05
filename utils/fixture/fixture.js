const base = require('@playwright/test');
const { ChooseEmailModal } = require('../pages/login/ChooseEmail.modal');
const { RemindModal } = require('../pages/login/RemindPassword.modal');
const { EmailModal } = require('../pages/login/Email.modal');
const { PhoneModal } = require('../pages/login/Phone.modal');
const { SMSModal } = require('../pages/login/SMS.modal');
const { Header } = require('../pages/frame/header');
const { LoginModal } = require('../pages/login/Login.modal');


exports.test = base.test.extend({
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    loginModal: async ({ page }, use) => {
        await use(new LoginModal(page));
    },
    emailModal: async ({ page }, use) => {
        await use(new EmailModal(page));
    },
    phoneModal: async ({ page }, use) => {
        await use(new PhoneModal(page));
    },
    smsModal: async ({ page }, use) => {
        await use(new SMSModal(page));
    },
    remindModal: async ({ page }, use) => {
        await use(new RemindModal(page));
    },
    chooseEmailModal: async ({ page }, use) => {
        await use(new ChooseEmailModal(page));
    },
});

exports.expect = base.expect;









