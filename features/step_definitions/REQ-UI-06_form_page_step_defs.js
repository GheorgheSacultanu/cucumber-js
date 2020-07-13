const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { navigationBarPageObjects } = require('../../page-objects/navigatio-bar-page.js');


var seleniumWebdriver = require('selenium-webdriver');
var chrome    = require('selenium-webdriver/chrome');

var options   = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


Given('URL Page Link to Form {string}', async function (string) {
  await driver.get(string);
});

When('I navigate to the Form Page to check the status', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonForm)).click();
});

Then('Than the navigation bar should be visible as the status is active', async function () {
  let navigationBar = await driver.findElement(navigationBarPageObjects.buttonUITesting, navigationBarPageObjects.buttonHome, navigationBarPageObjects.buttonForm, navigationBarPageObjects.buuttonError);
  await driver.wait(until.elementIsVisible(navigationBar), 1000);
  driver.close();
});