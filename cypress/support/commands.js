Cypress.Commands.add('login', (username, password) => { 
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('[name="username"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('button.btn').click();
})