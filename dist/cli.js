"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const program = new commander_1.Command();
const runCommand = (command) => {
    try {
        (0, child_process_1.execSync)(command, { stdio: 'inherit' });
    }
    catch (error) {
        console.error(`Error executing command: ${command}`);
        process.exit(1);
    }
};
program
    .command('eslint [files...]')
    .description('Run ESLint on specified files or default to src/**/*.ts')
    .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`eslint ${fileList} --config ${path_1.default.resolve(__dirname, 'eslint.config.js')}`);
});
program
    .command('prettier [files...]')
    .description('Run Prettier on specified files or default to src/**/*.ts')
    .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`prettier --write ${fileList} --config ${path_1.default.resolve(__dirname, 'prettier.config.js')}`);
});
program
    .command('stylelint [files...]')
    .description('Run Stylelint on specified files or default to src/**/*.less')
    .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.less`;
    runCommand(`stylelint ${fileList} --config ${path_1.default.resolve(__dirname, 'stylelint.config.js')}`);
});
program.parse(process.argv);
