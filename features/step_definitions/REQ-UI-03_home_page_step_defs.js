const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { homePageObjects } = require('../../page-objects/home-page.js');
const { navigationBarPageObjects } = require('../../page-objects/navigatio-bar-page.js');


let driver = new Builder().forBrowser('chrome').build();

Given('URL Link {string}', async function (string) {
  await driver.get(string);
});

When('I click on the Home button', async function () {
  await (await (await driver).findElement(navigationBarPageObjects.buttonHome)).click();
});

Then('I should get navigated to the Home page', async function () {
  let welcomeMessage = await driver.findElement(homePageObjects.pageHeader);
  await driver.wait(until.elementIsVisible(welcomeMessage), 1000);
  let actualResult = await welcomeMessage.getText();
  assert.equal(actualResult, homePageObjects.headerMessage);
  driver.close();
});