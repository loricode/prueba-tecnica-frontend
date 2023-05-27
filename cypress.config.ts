import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
  //  baseUrl:'http://localhost:2500',
    specPattern:'cypress/integration/**/**.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
