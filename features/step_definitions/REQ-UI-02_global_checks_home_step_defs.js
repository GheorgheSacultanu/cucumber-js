const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { genericPageObjects } = require('../../page-objects/generic-elements.js');

let driver = new Builder().forBrowser('chrome').build();


  Given('Website URL {string}', async function (String) {
    await driver.get(String);
  });

  When('I check the Home site logo', async function () {
  });

  Then('I should see the expected site logo on the Home Page', async function () {
    let getPageLogo = await driver.findElement(genericPageObjects.pageLogo);
    await driver.wait(until.elementIsVisible(getPageLogo), 1000);
    driver.close();
  });
