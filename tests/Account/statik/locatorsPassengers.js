export const list = (i) => ({
    header:'[data-testid="travellers-header"]',
    title:'[data-testid="travellers-header-title"]',
    addTraveller:'[data-testid="travellers-header-add-traveller-wrapper"]',
    list:'[id="travellers-documents-list"]',
    documentAccordion:`[id="traveller-document-accordion-${i}"]`,
    documentAccordionName:`[data-testid="traveller-document-accordion-name${i}"]`,
    documentAccordionDocument:`[data-testid="traveller-document-accordion-document${i}"]`,
    deleteButton:`[data-testid="delete-traveller-button${i}"]`,
    panel1bh:`[id="panel1bh-content"]`,
    clickAccordion:`[id="traveller-document-accordion-${i}"]`,
    gender:`[data-testid="account-traveller-document-form-gender"]`,
    birthday:`[id="account-traveller-document-form-birthday-input-label"]`,
    nationality:`[data-testid="account-traveller-document-form-nationality-input"]`,
    documentType:`[data-testid="account-profile-document-type"]`,
    documentNumber:`[data-testid="account-profile-document-number-input"]`,
    lastName:`[data-testid="account-traveller-document-form-lastName-input"]`,
    firstName:`[data-testid="account-traveller-document-form-firstName-input"]`,
    middleName:`[data-testid="account-traveller-document-form-middleName-input"]`,
    saveButton:`[data-testid="save-documents-button"]`,
    reset:`[data-testid="reset-documents-button"]`,
    clickDelete:`[data-testid="delete-traveller-button${i}"]`,
    question:`[id="confirmation-popup-delete-traveller-question"]`,
    buttons:`[id="confirmation-popup-delete-traveller-buttons"]`,
    confirmButton:`[data-testid="confirmation-popup-delete-traveller-confirm-button"]`,
    cancelButton:`[data-testid="confirmation-popup-delete-traveller-cancel-button"]`,
});

export const passengerLoc = {
    content:`[id="panel1bh-content"]`,
    gender:`[data-testid="account-traveller-document-form-gender"]`,
    label:`[id="account-traveller-document-form-birthday-input-label"]`,
    nationality:`[data-testid="account-traveller-document-form-nationality-input"]`,
    type:`[data-testid="account-profile-document-type"]`,
    number:`[data-testid="account-profile-document-number-input"]`,
    lastName:`[data-testid="account-traveller-document-form-lastName-input"]`,
    firstName:`[data-testid="account-traveller-document-form-firstName-input"]`,
    middleName:`[data-testid="account-traveller-document-form-middleName-input"]`,
    save:`[data-testid="save-documents-button"]`,
    reset:`[data-testid="reset-documents-button"]`,
};

export const changePassanger = [
    `[data-testid="account-traveller-document-form-lastName-0-input"]`, 
    `[data-testid="account-traveller-document-form-firstName-0-input"]`,
    `[data-testid="account-traveller-document-form-middleName-0-input"]`,
];

export const validationChangePassanger = [
    `[id="account-traveller-document-form-lastName-0-input-helper-text"]`, 
    `[id="account-traveller-document-form-firstName-0-input-helper-text"]`,
    `[id="account-traveller-document-form-middleName-0-input-helper-text"]`,
];

export const changeTheRoute = [
    `[data-testid="ask-change-depAirport-input"]`, 
    `[data-testid="ask-change-arrAirport-input"]`,
    `[id="dateTo-filter-input"]`,
];

export const validationChangeTheRoute = [
    `[id="ask-change-depAirport-input-helper-text"]`, 
    `[id="ask-change-arrAirport-input-helper-text"]`,
    `[id="dateTo-filter-input-helper-text"]`,
];

export const changeDataPassanger = [
    `[id="account-traveller-document-form-birthday-0-input"]`, 
    `[data-testid="account-traveller-document-form-nationality-0-input"]`,
    `[data-testid="account-profile-document-number-0-input"]`,
    `[id="account-document-expireDate-0-input"]`
];

export const validationChangeDataPassanger = [
    `[id="account-traveller-document-form-birthday-0-input-helper-text"]`, 
    `[id="account-traveller-document-form-nationality-0-input-helper-text"]`,
    `[id="account-profile-document-number-0-input-helper-text"]`,
    `[id="account-document-expireDate-0-input-helper-text"]`
];

export const profilePassenger = [
    '[data-testid = profile-lastName-input]',
    '[data-testid = profile-firstName-input ]',
    '[data-testid = profile-middleName-input]',
];

export const createPassenger = [
    '[data-testid="account-traveller-document-form-lastName-input"]',
    '[data-testid="account-traveller-document-form-firstName-input"]',
    '[data-testid="account-traveller-document-form-middleName-input"]',
];
