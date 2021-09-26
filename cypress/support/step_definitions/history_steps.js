/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import bodyTokenAuth05 from '../../support/payloads/tokenAuthBasicUser';
import bodyTokenAuth06 from '../../support/payloads/tokenAuthManagerUser';
import apiTokenGeral from '../services/tokenAuth';
import HistoryOperation from '../services/historyOperation';

let bodyCalled;

//Scenario: Status
Given('already specific route to validate with {string}', (string1) => {
    if (string1.indexOf('Feature positive')!=-1){
        bodyCalled = bodyTokenAuth05;
    }
    if (string1.indexOf('Feature negative')!=-1){
        bodyCalled = bodyTokenAuth06;
    }
    cy.log(Cypress.env('tokenAuth'));
    cy.log('ENV=' + Cypress.env('baseEnv'));
});

When('a GET request is executed correctly', () => {
    apiTokenGeral.callGetTokenServiceManager(bodyCalled).its('body.token').should('not.be.empty')
    .then(token => HistoryOperation.callGetToken(token))
    .as('statusX1')
});

Then('the API will return a {string} and code 200 successfully', (string2) => {
    cy.get('@statusX1').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string(string2)
    })
});
