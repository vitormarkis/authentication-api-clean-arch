/**
 * For a detailed explanation regarding each configuration property, visit:
 */

import type { Config } from "jest"
import { pathsToModuleNameMapper } from "ts-jest"
const { compilerOptions } = require("./tsconfig")

const config: Config = {
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
}

export default config
