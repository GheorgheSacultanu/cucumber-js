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


Given('This URL {string}', async function (string) {
  await driver.get(string);
});

When('I check the Page Paragraph', async function () {
});

Then('The expeted text should be visible on the Home page in p1 tag', async function () {
  let getParagraphMessage = await driver.findElement(homePageObjects.pageParagraph);
  let actualResult = await getParagraphMessage.getText();
  assert.equal(actualResult, homePageObjects.paragraphMessage);
  driver.close();
});