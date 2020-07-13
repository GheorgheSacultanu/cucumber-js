const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { genericPageObjects } = require('../../page-objects/generic-elements.js');

var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


//let driver = new Builder().forBrowser('chrome').build();

Given('Form Page URL {string}', async function (String) {
  await driver.get(String);
});

When('I check Form site title', async function () {
});

Then('I should see the expected site title on the Form Page', async function () {
  const actualResult = await driver.getTitle();
  assert.equal(actualResult, genericPageObjects.titleMessage);
  driver.close();
});
