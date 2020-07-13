const { By } = require('selenium-webdriver');
const errorPageObjects = {
    //Page Elements
    pageHeader: By.tagName('h1'),
    //Page Messages
    headerMessage: '404 Error: File not found :-(',
    paragraphMessage: 'Through the magic of digital telecommunications, your wrong credential is now winging its way to the maintainer.',
    };
  
    exports.errorPageObjects = errorPageObjects;