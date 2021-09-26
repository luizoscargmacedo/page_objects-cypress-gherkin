/// <reference types="Cypress" />

const urlService = Cypress.env('baseUrl') + Cypress.env('endpoint.token.operation')

class TokenOperation {

    callGetToken(token) {
        cy.log("URL GET-SERVICE - ", urlService)
        return cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: Cypress.env('baseUrl') + Cypress.env('endpoint.token.operation'), 
                    headers: { Authorization: `bearer ${token}` }
            })
    }
}
export default new TokenOperation()