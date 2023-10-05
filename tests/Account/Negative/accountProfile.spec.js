const { expect } = require('@playwright/test');
const { test } = require('../../../utils/fixture/accountProfile');
const config  = require('../../../playwright.config');
const {logConsoleMessages} = require('../../lib/logs');
const { validation } = require('../statik/textData');

// Валидация при смене данных профиля и смене пароля

test.beforeEach(async ({ page, header, emailModal, menu }) => {

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

test.describe('Profule', () => {

    test('Phone code', async ({ page, button, phoneCode, phoneNumber }) => {

        let veiwPortWidth = page.viewportSize().width;

        // Поле ввода не остается пустым
        const codeBeforeOnly = await phoneCode.phoneCodeValue();
        await phoneCode.typePhoneCodeInput('12345678 6543');
        await phoneCode.validationPhoneCodeInput();

        veiwPortWidth < 1024 ? await page.keyboard.press('Escape') : undefined;  

        await phoneNumber.phoneNumberClick();
        let codeAfterOnly = await phoneCode.phoneCodeValue();
        expect(codeBeforeOnly).toBe(codeAfterOnly);    
        await phoneCode.typePhoneCodeInput('rtxcviv');
        await phoneCode.validationPhoneCodeInput();

        veiwPortWidth < 1024 ? await page.keyboard.press('Escape') : undefined;  

        await phoneNumber.phoneNumberClick();
        codeAfterOnly = await phoneCode.phoneCodeValue();
        expect(codeBeforeOnly).toBe(codeAfterOnly);    
        await phoneCode.typePhoneCodeInput('@#$%^&*( @#$%^');
        await phoneCode.validationPhoneCodeInput();

        veiwPortWidth < 1024 ? await page.keyboard.press('Escape') : undefined;  

        await phoneNumber.phoneNumberClick();
        codeAfterOnly = await phoneCode.phoneCodeValue();
        expect(codeBeforeOnly).toBe(codeAfterOnly);    
        await button.saveChangesIsDisabled();

    });

    test('Phone number', async ({ button, phoneNumber }) => {

        // При пустом поле кнопка неактивна
        await phoneNumber.clearPhoneNumberInput();
        await button.saveChangesIsDisabled();

        // В поле можно ввести только цифры
        await phoneNumber.typePhoneNumberInput('rtcyvu');
        let numValue = await phoneNumber.phoneNumberValue();
        expect(numValue).toBe('');
        await button.saveChangesIsDisabled();
        await phoneNumber.typePhoneNumberInput('#$%^&');
        numValue = await phoneNumber.phoneNumberValue();
        expect(numValue).toBe('');
        await button.saveChangesIsDisabled();

        // Минимальное количество символов
        await phoneNumber.typePhoneNumberInput('12');
        await button.saveChangesIsDisabled();
        await phoneNumber.typePhoneNumberInput('123');
        await button.saveChangesIsEnabled();

    });

    test('Date of birth', async ({ button, birthday }) => {

        // При пустой строке кнопка не активна
        await birthday.clearBirthdayInput();
        await birthday.validationBirthdayInput(validation.enterDate);
        await button.saveChangesIsDisabled();

        // Если поле не заполнено до конца, кнопка не активна
        await birthday.typeBirthdayInput('101219');
        await birthday.validationBirthdayInput(validation.correctDateBirth);
        await button.saveChangesIsDisabled();
        await birthday.clearBirthdayInput();

        // Поле не принимает ничего кроме цифр 
        await birthday.typeBirthdayInput('QWERйцук$');
        let birthdayValue = await birthday.birthdayValue();
        expect(birthdayValue).toBe('');

        // При корректном вводе кнопка активна
        await birthday.typeBirthdayInput('12122000');
        birthdayValue = await birthday.birthdayValue();
        expect(birthdayValue).toBe('12.12.2000');
        await button.saveChangesIsEnabled();
    
    });

    test('Last name', async ({ button, lastName }) => {

      // Кнопка не активна при пустом поле
      await lastName.clearLastNameInput();
      await lastName.validationLastNameInput(validation.cannotBeEmpty);
      await button.saveChangesIsDisabled();

      // Поле принимает латиницу
      await lastName.typeLastNameInput('TRYvyiu');
      let lastNameValue = await lastName.lastNameValue();
      expect(lastNameValue).toBe('TRYvyiu');
      await button.saveChangesIsEnabled();
      await lastName.clearLastNameInput();

      // Поле принимает кириллицу
      await lastName.typeLastNameInput('ЙЦУКыво');
      lastNameValue = await lastName.lastNameValue();
      expect(lastNameValue).toBe('ЙЦУКыво');
      await button.saveChangesIsEnabled();
      await lastName.clearLastNameInput();

      // Кнопка не активна при вводе некорректного значения
      await lastName.typeLastNameInput('ЙЦУУекнQQWERrdtf');
      await lastName.validationLastNameInput(validation.changeLayout);
      await button.saveChangesIsDisabled();
  
  });

    test('First name', async ({ button, firstName }) => {

      // Кнопка не активна при пустом поле
      await firstName.clearFirstNameInput();
      await firstName.validationFirstNameInput(validation.cannotBeEmpty);
      await button.saveChangesIsDisabled();

      // Поле принимает латиницу
      await firstName.typeFirstNameInput('TRYvyiu');
      let FirstNameValue = await firstName.firstNameValue();
      expect(FirstNameValue).toBe('TRYvyiu');
      await button.saveChangesIsEnabled();
      await firstName.clearFirstNameInput();

      // Поле принимает кириллицу
      await firstName.typeFirstNameInput('ЙЦУКыво');
      FirstNameValue = await firstName.firstNameValue();
      expect(FirstNameValue).toBe('ЙЦУКыво');
      await button.saveChangesIsEnabled();
      await firstName.clearFirstNameInput();

      // Кнопка не активна при вводе некорректного значение
      await firstName.typeFirstNameInput('ЙЦУУекнQQWERrdtf');
      await firstName.validationFirstNameInput(validation.changeLayout);
      await button.saveChangesIsDisabled();
  

  });

    test('Middle name', async ({ button, middleName }) => {

      // Кнопка активна при пустом поле
      await middleName.clearMiddleNameInput();
      await button.saveChangesIsEnabled();

      // Поле принимает латиницу
      await middleName.typeMiddleNameInput('TRYvyiu');
      let middleNameValue = await middleName.middleNameValue();
      expect(middleNameValue).toBe('TRYvyiu');
      await button.saveChangesIsEnabled();
      await middleName.clearMiddleNameInput();

      // Поле принимает кириллицу
      await middleName.typeMiddleNameInput('ЙЦУКыво');
      middleNameValue = await middleName.middleNameValue();
      expect(middleNameValue).toBe('ЙЦУКыво');
      await button.saveChangesIsEnabled();
      await middleName.clearMiddleNameInput();

      // Кнопка не активна при вводе некорректного значение
      await middleName.typeMiddleNameInput('ЙЦУУекнQQWERrdtf');
      await middleName.validationMiddleNameInput(validation.changeLayout);
      await button.saveChangesIsDisabled();

  });

  test('Password change', async ({ page, button, password }) => {

    // Валидация пустого поля "Текущий пароль"
    await password.typeCurrentInput('1');
    await password.clearCurrentInput(); 
    await password.validationCurrentInput(validation.passwordCannotBeEmpty);

    // Валидация при совпадении старого пароля с новым, первое поле
    await password.typeCurrentInput('123123');
    await password.typeNewPasswordInput('123123');
    await password.validationNewPasswordInput(validation.mustNotMatch);
   
    // Валидация несовпадения значений в полях "Новый пароль" и "Повторите новый пароль"
    await password.typeNewPasswordAgain('121212');
    await password.validationNewPasswordAgain(validation.passwordMismatch);
    await button.savePasswordIsDisabled();
   
    // Валидация совпадения старого пароля с новым, второе поле
    await password.clearNewPasswordAgain();  
    await password.typeNewPasswordAgain('123123');
    await password.validationNewPasswordAgain(validation.mustnotMatch);
    await button.savePasswordIsDisabled();
   
    //  Текущий пароль введен неверно
    await password.clearCurrentInput(); 
    await password.typeCurrentInput('1111');
    await button.savePasswordClick();
    await password.validationCurrentInput(validation.incorrectPassword);
    await button.savePasswordIsEnabled();
    
    // Слишком короткий пароль
    await password.clearNewPasswordInput();  
    await password.typeNewPasswordInput('12');
    await password.validationNewPasswordInput(validation.shortPassword);
    await button.savePasswordIsDisabled();
   
  });

});
