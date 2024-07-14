import { Builder, By, until } from 'selenium-webdriver';
import AxeBuilder from '@axe-core/webdriverjs';
import { expect } from 'chai';
import { describe, it, after, before } from 'mocha';

describe('Mars Deque University Accessibility Tests', function() {
    let driver;


    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://dequeuniversity.com/demo/mars');
    });

    after(async function() {
        await driver.quit();
    });

    it('should load the main-nav', async function() {
        await driver.wait(until.elementLocated(By.css('#main-nav')), 3000);
        const mainNav = await driver.findElement(By.css('#main-nav'));
        const isDisplayed = await mainNav.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should perform an accessibility scan', async function() {
        const axeBuilder = new AxeBuilder(driver);
        const results = await axeBuilder.analyze();
        console.log('Accessibility Violations:', results.violations);
        expect(results.violations.length).to.equal(0, 'Accessibility violations found');
    });
});
