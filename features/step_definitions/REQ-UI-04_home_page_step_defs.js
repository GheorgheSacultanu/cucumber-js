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


Given('Open URL {string}', async function (string) {
  await driver.get(string);
});

When('I will click on Home Button', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonHome)).click();
});

Then('It should turn to active status and the navigation bar should be visible', async function () {
  let navigationBar = await driver.findElement(navigationBarPageObjects.buttonUITesting, navigationBarPageObjects.buttonHome, navigationBarPageObjects.buttonForm, navigationBarPageObjects.buuttonError);
  await driver.wait(until.elementIsVisible(navigationBar), 1000);
  driver.close();
});