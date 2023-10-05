const input = {
    lastNameInput: '[data-testid="profile-lastName-input"]',
    lastNameValidation: '[id="profile-lastName-input-helper-text"]',

    firstNameInput: '[data-testid="profile-firstName-input"]',
    firstNameValidation: '[id="profile-firstName-input-helper-text"]',

    middleNameInput: '[data-testid="profile-middleName-input"]',
    middleNameValidation: '[id="profile-middleName-input-helper-text"]',

    birhdayInput: '[id="profile-birthday-input"]',
    birthdayValidation: '[id="profile-birthday-input-helper-text"]',
    birhdayLabel: '[id="profile-birthday-input-label"]', 

    phoneCodeInput: '[id="profile-phone-code"]',
    phoneCodeValidation: '[]',

    phoneNumberInput: '[data-testid="profile-phone-number-input"]',
    phoneNumberValidation: '[id="profile-phone-number-input-helper-text"]', 
    
    currentPasswordInput: '[data-testid="profile-current-password-input"]',
    currentPasswordValidation: '[id="profile-current-password-input-helper-text"]',

    newPasswordInput: '[data-testid="profile-new-password-input"]',
    newPasswordValidation: '[id="profile-new-password-input-helper-text"]',

    repaetPasswordInput: '[data-testid="profile-new-password-confirm-input"]',
    repeatPasswordValidation: '[id="profile-new-password-confirm-input-helper-text"]',

    gender: '[data-testid="profile-gender"]',
    genderMan: '[data-testid="item-1"]',
    genderWoman: '[data-testid="item-0"]'

};

const button = {
    saveChanges: '[data-testid="profile-save-changes-button"]',
    savePassword: '[data-testid="profile-password-change-button"]',

    saveDocumentsButton: '[]',

    showCurrentPassword: '[id="profile-current-password-show-hide-button"]',
    showNewPassword: '[id="profile-new-password-show-hide-button"]',
    showNewConfirmPassword: '[id="profile-new-password-confirm-show-hide-button"]',
};

module.exports = { input, button }