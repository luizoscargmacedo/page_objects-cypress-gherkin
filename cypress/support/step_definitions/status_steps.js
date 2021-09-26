/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import bodyTokenAuth03 from '../../support/payloads/tokenAuthBasicUser';
import bodyTokenAuth04 from '../../support/payloads/tokenAuthManagerUser';
import apiTokenGeral from '../services/tokenAuth';
import StatusOperation from '../services/statusOperation';

let bodyCalled;

//Scenario: Status
Given(' already specific route to validate with {string}', (string1) => {
    if (string1.indexOf('Feature positive')!=-1){
        bodyCalled = bodyTokenAuth03;
    }
    if (string1.indexOf('Feature negative')!=-1){
        bodyCalled = bodyTokenAuth04;
    }
    cy.log(Cypress.env('tokenAuth'));
    cy.log('ENV=' + Cypress.env('baseEnv'));
});

When('a status request is executed ', () => {
    apiTokenGeral.callGetTokenServiceSystem(bodyCalled).its('body.token').should('not.be.empty')
    .then(token => StatusOperation.callGetToken(token))
    .as('statusX1')
});

Then('the API will return a {string} showing the correct status', (string2) => {
    cy.get('@statusX1').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string(string2)
    })
});
