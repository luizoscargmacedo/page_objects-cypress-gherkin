/// <reference types="Cypress" />

const urlService = Cypress.env('baseUrl') + Cypress.env('endpoint.status.operation')

class StatusOperation {

    callGetToken(token) {
        cy.log("URL GET-SERVICE - ", urlService)
        return cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: Cypress.env('baseUrl') + Cypress.env('endpoint.status.operation'), 
                    headers: { Authorization: `bearer ${token}` }
            })
    }
}
export default new StatusOperation()