const { expect } = require('@playwright/test');
const { test } = require('../../../utils/fixture/accountProfile');
const config = require('../../../playwright.config.js')
const {logConsoleMessages} = require('../../lib/logs.js')
const { profileBefore, profileAfter } = require('../lib/funcPassengers.js');
const { manFullName, womanFullName } = require('../lib/randomFullName.js')

const { countryCode } = require('../lib/randomNumber.js');
const { getRandomInt, fullName } = require('../lib/functions.js');
const { profilePassenger } = require('../statik/locatorsPassengers'); 

let veiwPortWidth;

test.beforeEach(async ({ page, header, emailModal, menu }) => {

    veiwPortWidth = page.viewportSize().width;
    await page.goto('/');
    await header.openLoginModal();
    await emailModal.modalIsLoaded();
    await emailModal.typeEmailInput(config.use.email);
    await emailModal.typePasswordInput(config.use.password);
    await emailModal.submitForm();
    await header.goToPersonalAccount();
    await menu.clickProfile();
    
    logConsoleMessages(page);

}); 

test.describe('Profile', () => {

  test('Contact info', async ({ page, button, phoneCode, phoneNumber }) => {

    // Изначальные данные
    const codeBefore = await phoneCode.phoneCodeValue();

    // Вводим код
    await phoneCode.clearPhoneCodeInput();
    await phoneCode.typePhoneCodeInput(countryCode[getRandomInt(210)]);
    await page.keyboard.press('Enter');

    // Вводим номер
    await phoneNumber.clearPhoneNumberInput();    
    await phoneNumber.typePhoneNumberInput('1' + getRandomInt(9) + '2345678' + getRandomInt(9));

    // Созраняем
    await button.saveChangesClick();

    // Сообщение
    const change = page.getByText('Данные успешно сохранены');
    await change.waitFor();
    const changeMessage = await page.getByText('Данные успешно сохранены').isVisible();
    expect(changeMessage).toBe(true);

    const codeAfter = await phoneCode.phoneCodeValue();

    // Проверка что данные изменились
    expect(codeBefore).not.toBe(codeAfter);

    // Email совпадает с Email по которому фходили в аккаунт
    const emailPersonalData = await page.locator('[data-testid="profile-email-input"]').inputValue();
    expect(config.use.email).toBe(emailPersonalData);

    // Проверка на пустые строки
    expect(codeBefore).not.toBe('');
    expect(codeBefore).not.toBe('');

  });

  test('Personal data', async ({page, button, birthday, gender, middleName}) => {

    // Фиксируем начальные значения
    let allValueBefore = await profileBefore(page);

    // Изменение лейбла при нажатии на поле "Дата рождения"
    const titleBirhdayBefore = await birthday.birthdayLabel();
    expect(titleBirhdayBefore).toBe('Дата рождения');
    await birthday.birthdayInputClick();
    const titleBirhdayAfter = await birthday.birthdayLabel();
    expect(titleBirhdayAfter).toBe('День/Месяц/Год');    
    
    // Вводим новые значения
    await birthday.clearBirthdayInput();
    await birthday.typeBirthdayInput('1012199' + getRandomInt(9));

    const genderValue = await gender.genderValue();
    await gender.genderClick();

    // В зависимости от пола вводятся ФИО
    if ( genderValue == 'ПолМужскойПол') {
      await gender.woman();
      await fullName( page, profilePassenger, womanFullName );
    } else {
      await gender.man();
      await man( page, profilePassenger, manFullName );
    };

    // Сохраняем данные 
    await button.saveChangesClick();
    const add = page.getByText('Данные успешно сохранены');
    await add.waitFor();
    const addMessage = await page.getByText('Данные успешно сохранены').isVisible();
    expect(addMessage).toBe(true);

    // Фиксируем и проверяем изменения
    let allValueAfter = await profileAfter(page);

    for (let key in allValueBefore) {
      expect(allValueBefore[key]).not.toBe(allValueAfter[key]);
    };    

    // Проверка на пустые строки
    for (let key in allValueAfter) {
      expect(allValueAfter[key]).not.toBe('');
    }; 
    
    // Сохранение без отчества
    await middleName.clearMiddleNameInput();
    await button.saveChangesClick();

  });

  test('Password change', async ({page, password, button, emailModal, header, menu}) => {

      // Вводим новый пароль
      await password.typeCurrentInput('123123');
      await password.typeNewPasswordInput('123123123');
      await password.typeNewPasswordAgain('123123123');

      // Кнопки скрытия паролей работают
      await button.showCurrentPassword();
      await button.showNewPassword();
      await button.showNewConfirmPassword();

      // Проверка скрытия пароля
      const currentPassword = await page.$('#profile-current-password-input');
      const newPassword = await page.$('#profile-new-password-input');
      const newConfirmPassword = await page.$('#profile-new-password-confirm-input');

      const currentPasswordType = await currentPassword.getAttribute('type');
      const newPasswordType = await newPassword.getAttribute('type');
      const newConfirmPasswordType = await newConfirmPassword.getAttribute('type');

      expect(currentPasswordType).toBe('text');
      expect(newPasswordType).toBe('text');
      expect(newConfirmPasswordType).toBe('text');

      // Сохраняем новый пароль
      await button.savePasswordClick();

      // Вход с новым паролем
      await page.click('[data-testid="site-menu-close-button"]')
      veiwPortWidth < 1024 ? await page.click('[data-testid = site-menu-open-button]') : undefined;     
      await page.click('[data-testid="logout-Button"]');
      await header.openLoginModal();
      await emailModal.modalIsLoaded();
      await emailModal.typeEmailInput(config.use.email);
      await emailModal.typePasswordInput('123123123');
      await emailModal.submitForm();
      await header.goToPersonalAccount();
      await menu.clickProfile();

      // Возвращаем старый пароль для того чтобы потом тест не ломался
      await password.typeCurrentInput('123123123');
      await password.typeNewPasswordInput('123123');
      await password.typeNewPasswordAgain('123123');
      await button.savePasswordClick();

  });

});

