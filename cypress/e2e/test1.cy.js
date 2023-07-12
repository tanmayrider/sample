/// <reference types="cypress" />
describe('this is my first test',()=>{
     let searchItem=process.env.user;
before(()=>{
    //cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    // cy.fixture('testData').then((val)=>{
    //     searchItem=val.searchItem
    // })
})
it('visit cypress official site and click on tooling',()=>{
    cy.contains('Accept All').click()
    cy.contains('Tooling').click()
    cy.contains('TypeScript').click()
    cy.get('header h1').should('include.text','TypeScript')
    cy.get('.DocSearch-Button-Placeholder').type(searchItem)
})
it.only('visit shine uk site and type somthing in search',()=>{
    cy.visit('https://www.shein.co.uk/')
    cy.get('button[id="onetrust-accept-btn-handler"]').click()
    cy.get('i[class="iconfont icon-close she-close"]').click()
    cy.get('a[title="WOMEN"]').click()
    cy.get('div input[type="search"]').clear().type(searchItem,'{enter}').type('{enter}')
    cy.get('h1[class="top-info__title-name"]').should('include.text','Shorts')
})
})
