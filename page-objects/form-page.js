const { By } = require('selenium-webdriver');
const formePageObjects = {
     //Page Elements
     pageHeader: By.tagName('h1'),
     pageLogo: By.id('dh_logo'),
     pageTitle: By.tagName('title'),
     imputForm: By.id('hello-input'),
     buttonSubmit: By.id('hello-submit'),
     helloPageText: By.id('hello-text'),
     //Page Messages
     headerMessage: 'Simple Form Submission',
     };
  
     exports.formePageObjects = formePageObjects;