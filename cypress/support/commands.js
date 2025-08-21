// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get(':nth-child(1) > [name="email"]').type(email);
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(password);
    cy.get('.otUnI').click();
})

Cypress.Commands.add('register', (email, name, password, confirmationPassword) => {
    cy.get('.ihdmxA').click();
    cy.get(':nth-child(2) > [name="email"]').type(email, { force: true });
    cy.get('[name="name"]').type(name, { force: true });
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(password, { force: true });
    cy.get('[name="passwordConfirmation"]').type(confirmationPassword, { force: true });
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    // Assert message
    cy.get('#modalText').invoke('text').should('match', /^A conta \d+-\d+ foi criada com sucesso$/);
    cy.get('#btnCloseModal').click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })