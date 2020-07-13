const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const { genericPageObjects } = require('../../page-objects/generic-elements.js');

var seleniumWebdriver = require('selenium-webdriver');
var chrome    = require('selenium-webdriver/chrome');

var options   = new chrome.Options().headless();

var driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()



  Given('Url Form Page {string}', async function (String) {
    await driver.get(String);
  });

  When('I check the Form site logo', async function () {
  });

  Then('I should see the expected site logo on the Form Page', async function () {
    let getPageLogo = await driver.findElement(genericPageObjects.pageLogo);
    await driver.wait(until.elementIsVisible(getPageLogo), 1000);
    driver.close();
  });
