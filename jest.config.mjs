// jest.config.mjs
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // adjust if you use "@/..." aliases
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // If you keep "type": "module" in package.json, this helps Jest handle TS/ESM
  transform: {},
};

export default createJestConfig(customJestConfig);
