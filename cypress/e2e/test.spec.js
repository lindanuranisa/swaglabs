/// <reference types="cypress" />
import standard_user from '../fixtures/standard_user.json'
import LoginPage from '../support/loginPage.js'

describe('As a user, I want to log in with valid credentials so that I can access the products page.', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
        win.sessionStorage.clear();
        });


        // Optional: Navigate to a page to ensure a fresh state
        cy.visit('/');
    });

    it('Verify login with valid credential', () => {
        cy.visit('/')
        cy.url().should('include', '/www.saucedemo.com/')
        
        cy.get('#user-name').type(standard_user.userName)
        cy.get('#password').type(standard_user.password)
        cy.get('#login-button').click()

        cy.url().should('include', '/inventory.html')
    });

    it('Verify login with valid credential, as locked out user', () => {
        cy.visit('/')
        cy.url().should('include', 'https://www.saucedemo.com/')
        
        cy.get('#user-name1').type('locked_out_user')
        cy.get('#password1').type('secret_sauce')
        cy.get('#login-button').click()

        // cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
    });

    it('Verify login with valid credential, as error user', () => {
        loginPage.visit();
        loginPage.fillUserNameField(Cypress.env("errorUserName"));
        loginPage.fillPasswordField(Cypress.env("password"));
        loginPage.submit()

        cy.url().should('include', '/inventory.html')
    })
});