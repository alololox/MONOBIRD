const path = require("path");

module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": path.resolve(__dirname, "./wrapJest.js")
  },
  testMatch: ["<rootDir>(*.)test.{js, jsx}"], // finds test
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each"
  ],
  collectCoverageFrom: ["<rootDir>/**/*test.{js,jsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "package.json",
    "/coverage/",
    ""
  ],
  collectCoverage: true,
  coverageReporters: ["text-summary", "lcov", "text", "clover"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};
