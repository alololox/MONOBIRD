module.export = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest"
  },
  testMatch: ["<rootDir>/src/**/>(*.)test.{js, jsx}"], // finds test
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each"
  ],
  collectCoverageFrom: ["**/*test.{js,jsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "package.json", "/coverage/"],
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
