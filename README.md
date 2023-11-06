# 🎭 Playwright Auto Tests Portfolio for [Sauce Labs](https://www.saucedemo.com) Website

## 🔍 Overview

This repository contains an automated test portfolio using Playwright, written in JavaScript, to test the Sauce Labs website using the Page Object Model (POM) design pattern. The tests aim to ensure the functionality and user experience of the Sauce Labs website are consistent and robust. 
Tests from this project can be run using [Docker](#docker).

## ⚡️ Running the Tests with GitHub CI

In this repository, a GitHub workflow is set up. To run tests without cloning them to your local machine, simply star the repository, and the workflow will start automatically. You can find the test results, logs, and Allure report in the "Actions" tab. For more details on cloning the repository, working with Docker, and running tests, you can refer to this ## ⚙️ Installation.

## Test cases list
<details>
<summary>Show List</summary>
  
| Number | Test                                                                 | Page     |
| ------ | -------------------------------------------------------------------- | -------- |
| 1      | Success login into account                                           | Login    |
| 2      | Try to login with locked user                                        | Login    |
| 3      | Try to login with incorrect username                                 | Login    |
| 4      | Try to login with incorrect password                                 | Login    |
| 5      | Try to login with without username                                   | Login    |
| 6      | Try to login with without password                                   | Login    |
| 7      | Try to login without username and password                           | Login    |
| 8      | Try to close error message                                           | Login    |
| 9      | Login after error                                                    | Login    |
| 10     | Open empty cart                                                      | Cart     |
| 11     | Check that product in cart has all attributes                        | Cart     |
| 12     | Remove product from cart                                             | Cart     |
| 13     | Go to product page from cart                                         | Cart     |
| 14     | Return to shopping list page from cart                               | Cart     |
| 15     | Go to checkout page                                                  | Cart     |
| 16     | Check that product page has all attributes                           | Product  |
| 17     | Add and remove product from cart in product page                     | Product  |
| 18     | Remove product from cart in product page                             | Product  |
| 19     | Return to list page                                                  | Product  |
| 20     | Add product in product page and remove in list page                  | Product  |
| 21     | Check that all products have attributes                              | List     |
| 22     | Open product page by click on image                                  | List     |
| 23     | Open product page by click on title                                  | List     |
| 24     | Check sorting selector                                               | List     |
| 25     | Checking that default products sorting method is AZ                  | List     |
| 26     | Checking the sorting of products by name ASC (AZ)                    | List     |
| 27     | Checking the sorting of products by name DESC (ZA)                   | List     |
| 28     | Checking the sorting of products by price ASC (LOHI)                 | List     |
| 29     | Checking the sorting of products by price DESC (HILO)                | List     |
| 30     | Success checkout                                                     | Checkout |
| 31     | Try to checkout without any data                                     | Checkout |
| 32     | Try to checkout use only firstname                                   | Checkout |
| 33     | Try to checkout without postal code                                  | Checkout |
| 34     | Try to checkout without firstname                                    | Checkout |
| 35     | Check that error message can be close                                | Checkout |
| 36     | Check that it allowed to go to overview after error                  | Checkout |
| 37     | Check that checkout form store state                                 | Checkout |
| 38     | Go to overview page                                                  | Overview |
| 39     | Check that it is possible to return to product list page             | Overview |
| 40     | Check that it is possible to go to complete page                     | Overview |
| 41     | Check that payment and shipping info are displayed                   | Overview |
| 42     | Open product page from overview page                                 | Overview |
| 43     | Check that counter value equal to quantity of added products         | E2E      |
| 44     | Check that cart counter save value throughout all pages              | E2E      |
| 45     | Check that added to cart products stay added after logout -> login   | E2E      |
| 46     | Check that all products added to cart displayed in cart and overview | E2E      |
| 47     | Check that all prices on overview page counted properl               | E2E      |
</details>

## 🗂️ Test Directory Structure
  
### The tests are organized using the Page Object Model design pattern to enhance readability and maintainability. Here's an overview of the directory structure:

<details>
<summary>Show structure</summary>


```
tests
├── classes
│   └── general.js
├── fixture
│   └── fixture.js
├── pages
│   ├── cart.page.js
│   ├── checkout.page.js
│   ├── complete.page.js
│   ├── footer.page.element.js
│   ├── header.page.element.js
│   ├── login.page.js
│   ├── overview.page.js
│   ├── product.page.js
│   └── productList.page.js
├── tests-data
│   ├── error-data.js
│   ├── summary-data.js
│   └── user-data.js
└── tests
    ├── cart.spec.js
    ├── checkout.spec.js
    ├── e2e.spec.js
    ├── login.spec.js
    ├── overview.spec.js
    ├── product.spec.js
    └── productList.spec.js
```
</details>


## ⚙️ Installation

1. Clone this repository to your local machine.
```bash
git clone git@github.com:Caplia199/Tests.git
```
2. Navigate to the project's root directory using the terminal or command prompt.
3. Install the project dependencies by running the following command:

```bash
npm install
```
4. Install browsers by running the following command:
```bash
npx playwright install
```

## ⚡️ Running the Tests

To execute the test cases against the Sauce Labs website, simply run the following command:

Run tests :
```bash
npx playwright test
```

if you want to run tests on a specific browser, add the following command to the previous one: :
```bash
npx playwright test --project=chromium
```

## 📊 Generate Report

To generate Allure report run:

```bash
npx allure generate allure-results --clean -o allure-report
```

To open Allure report run:

```bash
npx allure open allure-report
```

<a id="docker"></a>
## 🐳 Docker  
(in process)
1. Clone this repository to your local machine.
```bash
git clone git@github.com:Caplia199/Tests.git
```
2. Create image.
```bash
make build
```
3. Run tests.
```bash
make run
```
4. Generate report.
```bash
make report
```

In case you want to see logs, use :
```bash
make logs
```

By default report will be hosted on port 3030, but you can change it in Makefile (run command) and package.json (allure:report, allure:open) files.

## 📦 Continuous Integration (Optional)

You can integrate this test suite with your preferred CI/CD tool (e.g., Jenkins, CircleCI) to run the tests automatically on each code commit or deployment.

## Contributing

Feel free to contribute to this test portfolio by opening pull requests or reporting issues. Your contributions and feedback are highly appreciated!

Happy testing!