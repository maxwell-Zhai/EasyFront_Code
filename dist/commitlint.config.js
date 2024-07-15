"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@commitlint/types");
const commitlintConfig = {
    extends: ["gitmoji"],
    rules: {
        "scope-empty": [types_1.RuleConfigSeverity.Error, "never"],
        'subject-empty': [types_1.RuleConfigSeverity.Error, 'never'],
        'type-empty': [types_1.RuleConfigSeverity.Error, 'never']
    },
};
exports.default = commitlintConfig;
module.exports = commitlintConfig;
