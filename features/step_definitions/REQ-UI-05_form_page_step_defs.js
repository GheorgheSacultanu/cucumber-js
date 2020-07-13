const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { navigationBarPageObjects } = require('../../page-objects/navigatio-bar-page.js');
const { formePageObjects } = require('../../page-objects/form-page.js');


var seleniumWebdriver = require('selenium-webdriver');
var chrome    = require('selenium-webdriver/chrome');

var options   = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


Given('Form URL Link {string}', async function (string) {
  await driver.get(string);
});

When('I click on the From button', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonForm)).click();
});

Then('I should get navigated to the Form page', async function () {
  let welcomeMessage = await driver.findElement(formePageObjects.pageHeader);
  await driver.wait(until.elementIsVisible(welcomeMessage), 1000);
  let actualResult = await welcomeMessage.getText();
  assert.equal(actualResult, formePageObjects.headerMessage);
  driver.close();
});