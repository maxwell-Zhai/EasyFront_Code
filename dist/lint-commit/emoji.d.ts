import type { LintOptions, QualifiedRules } from '@commitlint/types';
import { type Plugin } from '@commitlint/types';
declare const config: {
    plugins: Plugin[];
    parserPreset: LintOptions;
    rules: QualifiedRules;
};
export default config;
