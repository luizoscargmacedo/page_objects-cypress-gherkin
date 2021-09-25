// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getToken', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false, url: 'https://spice-hml.ultrasystem.io/authentication', 
        body: {
            "code": "76",
            "origin": "australia",
            "password": "thor@890"
            }
    }).its('body.token').should('not.be.empty')
    .then(token => {
        return token
    })
})