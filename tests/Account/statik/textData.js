const validation = {
    fillLastName: 'Заполните фамилию',
    fillFirstName: 'Заполните имя',

    changeLayout: 'Используйте одну раскладку клавиатуры',
    wrongCharacters:'Есть недопустимые символы',
    cyrillic: 'Заполните данные кириллицей',
    latin: 'Введите данные латиницей',

    correctDateBirth: 'Укажите корректную дату рождения',
    enterDate: 'Укажите дату рождения',

    nationality: 'Совпадений не найдено',
    selectNationalyty: 'Выберите гражданство из списка',

    nineNumbers: '9 цифр для загранпаспорта',
    tenNumbers: '10 цифр для паспорта',
    onlyNumbers: 'Только цифры и латинские буквы',
    enterNumber: 'Введите номер документа',

    correctDate: 'Укажите корректную дату',
    inputDate: 'Укажите дату окончания действия или выберите «без даты»',

    cannotBeEmpty: 'Данное поле не может быть пустым',

    passwordCannotBeEmpty: 'Пароль не может быть пустым',
    mustNotMatch: 'Новый пароль не должен совпадать со старым',
    passwordMismatch: 'Введённые пароли не совпадают',
    incorrectPassword: 'Текущий пароль введён неверно',
    shortPassword: 'Пароль слишком короткий',

};

const validationEnglish = {
    fillLastName: 'Enter family name',
    fillFirstName: 'Enter first name',

    changeLayout: 'Use a single keyboard layout',
    wrongCharacters:'Invalid symbols in input',
    cyrillic: 'Only cyrillic symbols are allowed',
    latin: 'Only latin characters are allowed',

    correctDateBirth: 'Enter date of birth correctry',
    enterDate: 'Enter date of birth',

    nationality: 'Совпадений не найдено',
    selectNationalyty: 'Select citizenship from the list',

    nineNumbers: '9 digits for this passport',
    tenNumbers: '10 digits for this passport',
    onlyNumbers: 'Only digits and latin letters',
    enterNumber: 'Enter document number',
    
    correctDate: 'Incorrect date',
    inputDate: 'Please enter document expiration date or select "No expiration date" option',

    cannotBeEmpty: 'This field cannot be empty',

    passwordCannotBeEmpty: 'Password cannot be empty',
    mustNotMatch: 'The new password must not be the same as the old password',
    passwordMismatch: 'Entered passwords do not match',
    incorrectPassword: 'Wrong password',
    shortPassword: 'Password is too short',
};

module.exports = { validation, validationEnglish };
