const { devices } = require('@playwright/test');

const config = {
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests/',

  // Run all tests in parallel.
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: 1,

  // Opt out of parallel tests on CI.
  workers: 1,

  // Reporter to use
  reporter: [
    ['html'],
    ['dot'],
    ['list'],
    ['allure-playwright']
  ],

  use: {

    // Viewport used for all pages in the context.
    viewport: { width: 1280, height: 720 },

    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:8080/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
    video: 'retain-on-failure',

    email: 'tttt@mail.com',

    password: '123123'

  },

  // Configure projects for major browsers.
  projects:
    [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
        },
      },

      {
        name: 'chromium',
        use: {
          ...devices['Desktop Edge'],
        },
      },

      {
        name: 'firefox',
        use: {
          ...devices['Desktop Firefox'],
        },
      },

      {
        name: 'webkit',
        use: {
          ...devices['Desktop Safari'],
        },
      },

      {
        name: 'Mobile Safari',
        use: {
          ...devices['iPhone 12'],
        },
      },

      {
        name: 'Mobile Chrome',
        use: {
          ...devices['Pixel 5'],
        },
      },

    ]
};

module.exports = config;


