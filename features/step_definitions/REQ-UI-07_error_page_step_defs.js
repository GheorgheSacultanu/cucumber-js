const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { navigationBarPageObjects } = require('../../page-objects/navigatio-bar-page.js');
const { errorPageObjects } = require('../../page-objects/error-page.js');


var seleniumWebdriver = require('selenium-webdriver');
var chrome    = require('selenium-webdriver/chrome');

var options   = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


Given('Home website URL Link {string}', async function (string) {
  await driver.get(string);
});

When('I click on the Error Tab', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buuttonError)).click();
});

Then('I should get a 404 HTTP Response code', async function () {
  let getHeaderMessage = await driver.findElement(errorPageObjects.pageHeader);
  await driver.wait(until.elementIsVisible(getHeaderMessage), 2000);
  let actualResult = await getHeaderMessage.getText();
  assert.equal(actualResult, errorPageObjects.headerMessage);
  driver.close();
});