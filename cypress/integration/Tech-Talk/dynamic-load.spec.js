/// <reference types="cypress" />

describe('Dynamic page load', () => {
    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
    });
    it('Should open the page where Element on page that is hidden', () => {
        cy.get('a[href*="loading/1"]').click();
        cy.get('#finish').should('not.be.visible');
        cy.get('#start button').click();
        cy.get('#finish', { timeout: 10000 }).should('be.visible');
    });
    it('Should open the page where Element on page that is not existing', () => {
        cy.get('a[href*="loading/2"]').click();
        cy.get('#finish').should('not.exist');
        cy.get('#start button').click();
        cy.get('#finish', { timeout: 10000 }).should('be.visible');
    });
});