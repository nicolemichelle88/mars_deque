// Import necessary modules and classes from selenium-webdriver, axe-core/webdriverjs, chai, and mocha
import { Builder, By, until } from 'selenium-webdriver'; // Selenium WebDriver classes for browser automation
import AxeBuilder from '@axe-core/webdriverjs'; // Axe-core for automated accessibility testing
import { expect } from 'chai'; // Chai for assertions
import { describe, it, after, before } from 'mocha'; // Mocha for structuring test cases

// Describe the test suite
describe('Mars Deque University Accessibility Tests', function() {
    let driver; // Variable to hold the WebDriver instance

    // Set a global timeout of 10 seconds (10000ms) for all tests in this suite
    this.timeout(10000);

    // Before hook to set up the WebDriver instance and navigate to the test page
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build(); // Create a new WebDriver instance for Chrome
        await driver.get('https://dequeuniversity.com/demo/mars'); // Navigate to the specified URL
    });

    // After hook to clean up and close the WebDriver instance
    after(async function() {
        await driver.quit(); // Quit the WebDriver instance and close the browser
    });

    // Test case to verify that the main navigation bar loads correctly
    it('should load the main-nav', async function() {
        await driver.wait(until.elementLocated(By.css('#main-nav')), 10000); // Wait until the main navigation element is located (max 10 seconds)
        const mainNav = await driver.findElement(By.css('#main-nav')); // Find the main navigation element
        const isDisplayed = await mainNav.isDisplayed(); // Check if the main navigation element is displayed
        expect(isDisplayed).to.be.true; // Assert that the main navigation element is displayed
    });

    // Test case to perform an accessibility scan using axe-core
    it('should perform an accessibility scan', async function() {
        const axeBuilder = new AxeBuilder(driver); // Create a new AxeBuilder instance using the WebDriver instance
        const results = await axeBuilder.analyze(); // Perform the accessibility analysis and get the results
        console.log('Accessibility Violations:', results.violations); // Log the accessibility violations to the console
        expect(results.violations.length).to.equal(0, 'Accessibility violations found'); // Assert that there are no accessibility violations
    });
});
