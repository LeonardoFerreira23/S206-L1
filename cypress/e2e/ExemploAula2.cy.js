/// <reference = cypress>

describe("Testes da criação, registro e login", ()=>{
  it.skip("Descrição do teste", () => { 
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('a.btn').click();
    cy.get('[name="firstName"]').type("Lindomar")
    cy.get('[name="lastName"]').type("Castro")
    cy.get('[name="username"]').type("lindo")
    cy.get('[name="password"]').type("123")
    cy.get('button.btn').click();
    cy.get('div.alert').should("contain.text","Registration successful")
  });

})

  it.skip("Teste de criação de usuário com falha", () => { 
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('a.btn').click();
    cy.get('[name="firstName"]').type("Lindomar")
    cy.get('[name="lastName"]').type("Castro")
    cy.get('[name="username"]').type("lindo")
    cy.get('button.btn').should("be.disabled")
  });


  it.skip("Teste de login com sucesso", () => { 
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('[name="username"]').type(infos[0])
    cy.get('[name="password"]').type(infos[1])
    cy.get('button.btn').click();
    cy.get('h1.ng-binding').should("contain.text",infos[0])
  });

  it.skip("Teste de remoção de usuário", () => { 
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('[name="username"]').type(infos[0])
    cy.get('[name="password"]').type(infos[1])
    cy.get('button.btn').click()
    cy.get('h1.ng-binding').should("contain.text",infos[0])
    cy.get('a[href="#"]').click()
    cy.get('a.btn').click()
    cy.get('[name="username"]').type(infos[0])
    cy.get('[name="password"]').type(infos[1])
    cy.get('button.btn').click();
    cy.get('div.alert').should("contain.text","Username or password is incorrect");
  });

  it("Delete do user com sucesso", () => { 
    let infos = criarUser()
    cy.login(infos[0], infos[1])
    cy.get('a[href="#"]').click();
    cy.get('a.btn').click()
    cy.login(infos[0], infos[1])
    cy.get('div.alert').should("have.text","Username or password is incorrect");
  });



function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora+minuto+seg+"ID"
  let Senha = hora+minuto+seg + "Senha"
  let infos = [ID,Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('a.btn').click();
  cy.get('[name="firstName"]').type(ID)
  cy.get('[name="lastName"]').type(ID)
  cy.get('[name="username"]').type(ID)
  cy.get('[name="password"]').type(Senha)
  cy.get('button.btn').click();
  cy.get('div.alert').should("contain.text","Registration successful")
  return infos
  

}



