const { By } = require('selenium-webdriver');
const homePageObjects = {
    //Page Elements
    pageHeader: By.tagName('h1'),
    pageParagraph: By.tagName('p'),
    pageLogo: By.id('dh_logo'),
    //Page Messages
    headerMessage: 'Welcome to the Docler Holding QA Department',
    paragraphMessage: 'This site is dedicated to perform some exercises and demonstrate automated web testing.',
};

exports.homePageObjects = homePageObjects;