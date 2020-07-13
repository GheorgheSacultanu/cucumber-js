const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { homePageObjects } = require('../../page-objects/home-page.js');


var seleniumWebdriver = require('selenium-webdriver');
var chrome    = require('selenium-webdriver/chrome');

var options   = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()


Given('Home Page {string}', async function (string) {
  await driver.get(string);
});

When('I check the Page Header', async function () {
});

Then('The expeted text should be visible on the Home page in h1 tag', async function () {
  let getHeaderMessage = await driver.findElement(homePageObjects.pageHeader);
  await driver.wait(until.elementIsVisible(getHeaderMessage), 1000);
  let actualResult = await getHeaderMessage.getText();
  assert.equal(actualResult, homePageObjects.headerMessage);
  driver.close();
});