# Cypress Commands Pattern

This project uses Cypress for end-to-end test automation, following a **commands-based architecture** to facilitate the reuse and organization of custom commands.

## Folder Structure

- **cypress/e2e/**  
  Contains automated test files.

- **cypress/support/commands.js**  
  Main file for defining custom Cypress commands, such as login and registration.

- **cypress/support/e2e/**  
  Folder for support files specific to end-to-end tests.

- **cypress/fixtures/**  
  Stores JSON files with test data, used to populate forms and validate scenarios.

- **cypress.config.js**  
  Cypress configuration file, including reporter, baseUrl, and plugin integration.

- **github/pipeline.yml**  
  CI pipeline for running automated tests on GitHub Actions.

## About the Architecture

The project uses Cypress's **commands pattern**, centralizing reusable commands in `commands.js`. This allows for cleaner, more maintainable, and reusable