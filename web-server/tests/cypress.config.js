const { defineConfig } = require('cypress');

module.exports = defineConfig({
  fixturesFolder: 'System/fixtures',
  videosFolder: 'System/output/videos',
  screenshotsFolder: 'System/output/screenshots',
  viewportHeight: 1000,
  viewportWidth: 1200,
  e2e: {
    specPattern: [
      'System/integration/*.cy.{js,jsx,ts,tsx}',
    ],
    baseUrl: "https://ais.usvisa-info.com/en-ca/niv/users/sign_in",
    scrollBehavior: 'center',
    browser: 'firefox',
    screenshotOnRunFailure: true,
    video: false,
  },
  env: {
    name: "Admin Tester",
    username: "abc",
    password: "def",
  },
});