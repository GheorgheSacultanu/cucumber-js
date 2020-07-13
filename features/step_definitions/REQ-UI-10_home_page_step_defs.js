const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { homePageObjects } = require('../../page-objects/home-page.js');


let driver = new Builder().forBrowser('chrome').build();

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