const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { formePageObjects } = require('../../page-objects/form-page.js');


let driver = new Builder().forBrowser('chrome').build();

Given('Link to Form Page {string}', async function (string) {
  await driver.get(string);
});

When('I type any value in the text field', async function () {
  await (await (await driver).findElement(formePageObjects.imputForm)).sendKeys("QA_Testing2020");
});

When('I click on Submit Button', async function () {
  await (await (await driver).findElement(formePageObjects.buttonSubmit)).click();
});

Then('I should get redirect to the Hello Page with the introduced text displayed in the page', async function () {
  let getHelloPageText = await driver.findElement(formePageObjects.helloPageText);
  let actualResult = await getHelloPageText.getText();
  assert.equal(actualResult, "Hello QA_Testing2020!");
  driver.close();
});