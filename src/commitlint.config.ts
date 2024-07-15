import type {UserConfig} from '@commitlint/types'; 
import {RuleConfigSeverity} from '@commitlint/types'; 

const commitlintConfig: UserConfig = {

  extends: ["gitmoji"],
  rules: {
    "scope-empty": [RuleConfigSeverity.Error, "never"],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'type-empty': [RuleConfigSeverity.Error, 'never']
  },
};

export default commitlintConfig;
module.exports = commitlintConfig;