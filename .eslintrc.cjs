module.exports = {
   root: true,
   parser: "@typescript-eslint/parser",
   plugins: ["svelte3", "@typescript-eslint", "jest-dom", "testing-library"],
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:testing-library/dom",
      "plugin:jest-dom/recommended",
      "plugin:playwright/playwright-test",
      "prettier"
   ],
   ignorePatterns: ["*.cjs"],
   overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
   settings: {
      "svelte3/typescript": () => require("typescript"),
      "svelte3/ignore-styles": () => true
   },
   parserOptions: {
      sourceType: "module",
      ecmaVersion: 2022
   },
   env: {
      browser: true,
      es2017: true,
      node: true
   }
};
