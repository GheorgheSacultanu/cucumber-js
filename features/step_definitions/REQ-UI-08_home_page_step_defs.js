const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { homePageObjects } = require('../../page-objects/home-page.js');
const { navigationBarPageObjects } = require('../../page-objects/navigatio-bar-page.js');


var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


Given('URL {string}', async function (string) {
  await driver.get(string);
});

When('I click on the UI Testing button', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonUITesting)).click();
});

Then('I should get redirected to the Home Page', async function () {
  let welcomeMessage = await driver.findElement(homePageObjects.pageHeader);
  await driver.wait(until.elementIsVisible(welcomeMessage), 1000);
  let actualResult = await welcomeMessage.getText();
  assert.equal(actualResult, homePageObjects.headerMessage);
  driver.close();
});