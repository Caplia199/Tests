const { chromium, firefox, webkit } = require('playwright-core');

const browserConnect = chromium;

const credentials = {
    user: 'a.rodionov',
    key: '56SLXx6VFq7qXI8THxk4LDiHbL9nPz7O3mvZPt8VlyraL9GiWw',
};

const capabilities = {
    browserName: 'pw-chromium', 
    browserVersion: 'latest',
    'LT:Options': {
        platform: 'Windows 10',
        resolution: "2048x1536",
        name: 'All tests',
        user: credentials.user,
        accessKey: credentials.key,
        network: true,
        video: true,
        console: true,
        'smartUIProjectName': 'Login form',
    },
};

const use = {
    baseUrl: "https://superkassa.ru/",
    email: "",
    password: ""
};

const config = { credentials, capabilities, browserConnect, use }

module.exports = config;