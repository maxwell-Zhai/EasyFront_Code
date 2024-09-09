import { Linter } from "eslint";

const config: Linter.Config = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "pnpm-lock.yaml"
  ],
  rules: {
    // "arrow-body-style": "off",
    // "prefer-arrow-callback": "off",
    "semi": "error"
  }
};

module.exports = config;
