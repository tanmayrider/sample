/// <reference types="cypress" />
describe('this is my first test',()=>{
before(()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
})
it('visit cypress official site and click on tooling',()=>{
    cy.contains('Accept All').click()
    cy.contains('Tooling').click()
    cy.contains('TypeScript').click()
    cy.get('header h1').should('include.text','TypeScript')
})
})
