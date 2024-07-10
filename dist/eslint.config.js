"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
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
