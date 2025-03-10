import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  transformIgnorePatterns: ["/node_modules/"],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/__test__/**/*.[jt]s?(x)",
    "**/tests/**/*.[jt]s?(x)",
  ],

  clearMocks: true,
};

export default createJestConfig(config);
