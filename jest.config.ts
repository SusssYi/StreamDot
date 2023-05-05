// Create jest config file with nextjs
//
// Path: jest.config.ts
// import type { Config } from "@jest/types";

import nextJest from "next/jest";

const createJestConfig = nextJest({
      dir: "./",
});

const customJestConfig = {
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
      moduleNameMapper: {
            "^@components(.*)$": "<rootDir>/components/$1",
            "^@pages(.*)$": "<rootDir>/pages/$1",
      },
      testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
