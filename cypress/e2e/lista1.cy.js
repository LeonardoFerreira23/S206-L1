/// <reference types="cypress" />

describe("Testes da página de login - Lista 1", () => {

  // Teste 1 (Negativo)
  it("Não deve logar com usuário bloqueado", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out.");
  });

  // Teste 2 (Negativo)
  it("Não deve logar com senha incorreta", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senhaincorreta"); // Senha errada
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username and password do not match");
  });

  // Teste 3 (Positivo)
  it("Deve logar com sucesso com usuário padrão", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");
  });

  // Teste 4 (Positivo)
  it("Deve adicionar um item ao carrinho", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Verifica se o ícone do carrinho foi atualizado para "1"
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });

  // Teste 5 (Positivo)
  it("Deve adicionar e remover um item do carrinho", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  // Teste 6 (Positivo)
  it("Deve fazer logout com sucesso", () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
   
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    cy.url().should("equal", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");
  });

});