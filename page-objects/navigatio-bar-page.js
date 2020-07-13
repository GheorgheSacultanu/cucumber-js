const { By } = require('selenium-webdriver');
const navigationBarPageObjects = {
    //Page Elements
    buttonUITesting: By.id('site'),
    buttonHome: By.id('home'),
    buttonForm: By.id('form'),
    buuttonError: By.id('error'),
};

exports.navigationBarPageObjects = navigationBarPageObjects;
