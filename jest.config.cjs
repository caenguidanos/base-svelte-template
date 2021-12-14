module.exports = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   passWithNoTests: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   testMatch: ["**/src/lib/**/*.spec.ts"],
   transform: {
      "^.+\\.svelte$": [
         "svelte-jester",
         {
            preprocess: true
         }
      ],
      "^.+\\.(t|j)s$": "@swc/jest"
   },
   moduleFileExtensions: ["js", "ts", "svelte"],
   moduleNameMapper: {
      "^\\$lib/(.*)$": ["<rootDir>/src/lib/$1"]
   },
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   collectCoverage: true,
   coverageDirectory: "./coverage/jest",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 0, // 🔥
         functions: 0, // 🔥
         lines: 0, // 🔥
         statements: 0 // 🔥
      }
   },
   collectCoverageFrom: ["**/src/lib/**/*.{ts,svelte}", "!**/mocks/**"]
};
