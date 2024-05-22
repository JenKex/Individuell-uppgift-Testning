import { defineConfig } from "cypress";

// Cypress has separate settings for component testing and E2E testing
// component testing works out of the box, but not E2E
export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:7500/", // must be same port as in vite.config.js
  },
});
