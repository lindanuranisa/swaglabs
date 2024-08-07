const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yafup9",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    chromeWebSecurity: false
  },
  env: {
    "standardUserName": "standard_user",
    "lockedOutUserName": "locked_out_user",
    "problemUserName": "problem_user",
    "performanceGlitchUser": "performance_glitch_user",
    "errorUserName": "error_user",
    "password": "secret_sauce"
  }
});
