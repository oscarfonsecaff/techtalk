/// <reference types="cypress" />

describe('example login to app', () => {
    let userDetails;
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.fixture('user').then((user) => {
        userDetails = user;    
        });
    });
    it('Should visit the login page and authenticate with correct credentials', () => {
        cy.visit('https://the-internet.herokuapp.com//login');
        cy.login(userDetails.username, userDetails.password);
        cy.get('.example h2:first').should('contain.text','Secure Area');
    });
});