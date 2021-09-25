// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
    cy.log('Before all');
    cy.getToken().then(token => {
        Cypress.env('tokenAuth', token);
    });
    switch (Cypress.env('baseEnv')){
      case 'hml':
        Cypress.env('baseUrl', "https://spice-env-hml.ultrasystem.io");
        break;
      case 'dev':
        Cypress.env('baseUrl', "https://spice-env-dev.ultrasystem.io");
        break;        
      case 'prd':
        Cypress.env('baseUrl', "https://spice-env-prd.ultrasystem.io");
        break;        
      default:
        Cypress.env('baseUrl', "https://spice-env-hml.ultrasystem.io"); 
        Cypress.env('baseEnv', "hml");        
    }
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
  })
  
  afterEach(() => {
    // runs after each test block
  })
  
  after(() => {
    // runs once all tests are done
  })
