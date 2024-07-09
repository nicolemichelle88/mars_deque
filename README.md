# Mars Deque University Accessibility Tests

This project is a JavaScript-based web accessibility testing suite for the Mars Deque University demo page. It uses Selenium WebDriver for browser automation, Mocha as the testing framework, Chai for assertions, and Axe-core for accessibility checks.

## Features

- Load and verify the presence of the main navigation bar on the page
- Perform an accessibility scan of the page using Axe-core
- Log accessibility violations to the console

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node package manager)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Clone the Repository

```bash
git clone git@github.com:nicolemichelle88/mars_deque.git
cd mars_deque
```

### Set Up the Project

1. **Install the dependencies:**

    ```bash
    npm install
    ```

2. **Ensure you have ChromeDriver installed and added to your system's PATH.**

    You can download ChromeDriver from [here](https://sites.google.com/chromium.org/driver/downloads) and follow the installation instructions.

### Running the Tests

1. **Run the test suite:**

    ```bash
    npm test
    ```

### Explanation of Test Cases

1. **Main Navigation Test:**
   - Verifies that the main navigation bar (`.main-nav` CSS selector) is loaded and displayed on the page.

2. **Accessibility Scan Test:**
   - Uses Axe-core to perform an accessibility scan of the page.
   - Logs any accessibility violations to the console.
   - Asserts that there are no accessibility violations found.

### Dependencies

- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver): For browser automation
- [@axe-core/webdriverjs](https://www.npmjs.com/package/@axe-core/webdriverjs): For accessibility testing
- [mocha](https://www.npmjs.com/package/mocha): Testing framework
- [chai](https://www.npmjs.com/package/chai): Assertion library
