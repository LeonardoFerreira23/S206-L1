const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  charts: true,
    reportDir: 'Exemplo/cypress/reports', // Caminho relativo
     overwrite: false,
     html: true,
     json: true,
   },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    specPattern: 'cypress/e2e//*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  },
});