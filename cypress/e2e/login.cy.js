
beforeEach(() => {
  cy.visit('/')
});

it('Register and do the login ', () => {
  cy.fixture('register').then((data) => {
    // Fill the register data to create a new user
    cy.register(data.email, data.name, data.password, data.confirmationPassword);
    // Do the login with a new user created 
    cy.login(Cypress.env('email'), Cypress.env('password'));
    // Asserts
    cy.get('#textName').should('have.text', 'Olá example email,');
    cy.get('.home__ContainerText-sc-1auj767-7 > :nth-child(2)').should('have.text', 'bem vindo ao BugBank :)');
    cy.get('.home__ContainerButtons-sc-1auj767-13').children().should('have.length', 4).each(($btn) => {
      cy.wrap($btn).should('be.visible');
    });
    cy.screenshot();
  });

});
it('Try to login with a wrong pass', () => {
  // Fill the fields to do the login
  cy.login(Cypress.env('email'), Cypress.env('password'));
  // Assert the error message 
  cy.get('#modalText').should('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!');
  cy.screenshot();

});