const { By } = require('selenium-webdriver');
const genericPageObjects = {
    //Page Elements
    pageLogo: By.id('dh_logo'),
    pageTitle: By.tagName('title'),
    //Page Messages
    titleMessage: 'UI Testing Site', //Unique for All Pages 
};

exports.genericPageObjects = genericPageObjects;