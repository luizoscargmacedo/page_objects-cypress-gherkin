/// <reference types="Cypress" />

const urlServiceUser = Cypress.env('baseUrl') + Cypress.env('endpoint.token.general');
const urlServiceManager = Cypress.env('baseUrl') + Cypress.env('endpoint.token.general');
const urlServiceSystem = Cypress.env('baseUrl') + Cypress.env('endpoint.token.general');

class TokenAuth {

    callGetTokenServiceUser(bodyCalled) {
        cy.log("URL SERVICE - ", urlServiceUser);
        cy.log("Body - ", bodyCalled);
        return cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: Cypress.env('baseUrl') + Cypress.env('endpoint.token.general'),
            body: bodyCalled
        })
    }

    callGetTokenServiceManager(bodyCalled) {
        cy.log("URL SERVICE - ", urlServiceManager);
        cy.log("Body - ", bodyCalled);
        return cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: Cypress.env('baseUrl') + Cypress.env('endpoint.token.general'),
            body: bodyCalled
        })
    }    

    callGetTokenServiceSystem(bodyCalled) {
        cy.log("URL SERVICE - ", urlServiceSystem);
        cy.log("Body - ", bodyCalled);
        return cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: Cypress.env('baseUrl') + Cypress.env('endpoint.token.general'),
            body: bodyCalled
        })
    }

}
export default new TokenAuth()