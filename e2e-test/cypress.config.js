const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://ui-app.default.svc.cluster.local",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
