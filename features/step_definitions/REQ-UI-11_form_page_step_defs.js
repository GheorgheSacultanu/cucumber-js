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


Given('URL Form Link {string}', async function (string) {
  await driver.get(string);
});

When('I navigate to the Form Page', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonForm)).click();
});

Then('The input box and submit button should be visible', async function () {
  let pageElements = await driver.findElement(formePageObjects.imputForm, formePageObjects.buttonSubmit);
  await driver.wait(until.elementIsVisible(pageElements), 1000);
  driver.close();
});