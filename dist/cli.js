"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const glob = __importStar(require("glob"));
const commit_config_1 = __importDefault(require("./commit.config"));
const commandClass_1 = require("./utils/commandClass");
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
    .command('init-hooks')
    .description('初始化hooks')
    .action(() => {
    const husky = new commandClass_1.Husky('husky');
    husky.runCommand(`init`);
    (0, child_process_1.execSync)('echo pnpm run lint-commit > .husky/commit-msg');
});
program
    .command('release')
    .description('使用release-it发布版本')
    .action(() => {
    const release = new commandClass_1.ReleaseIt('release-it');
    release.runCommand(`release-it --config ${path_1.default.resolve(__dirname, '.release-it.js')}`);
});
program
    .command('eslint [files...]')
    .description('执行eslint检查src目录下的所有ts文件')
    .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`eslint ${fileList} --config ${path_1.default.resolve(__dirname, 'eslint.config.js')}`);
});
program
    .command('prettier [files...]')
    .description('执行prettier格式化src目录下的所有ts文件')
    .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`prettier --write ${fileList} --config ${path_1.default.resolve(__dirname, 'prettier.config.js')}`);
});
program
    .command('stylelint [files...]')
    .description('执行stylelint检查根目录下的所有less文件')
    .action((files) => {
    const cwd = process.cwd();
    const patterns = files.length ? files : [`${cwd}/**/*.less`];
    const filesToLint = [];
    patterns.forEach((pattern) => {
        glob.sync(pattern).forEach((file) => {
            filesToLint.push(path_1.default.resolve(file));
        });
    });
    if (filesToLint.length === 0) {
        console.log('No files found to lint.');
        return;
    }
    const stylelint = new commandClass_1.Stylelint('stylelint');
    const configPath = path_1.default.resolve(__dirname, 'stylelint.config.js');
    stylelint.runCommand(`stylelint --config ${configPath} ${filesToLint.join(' ')}`);
});
program
    .command('commit')
    .description('使用commitizen提交代码')
    .action(() => {
    process.argv.pop();
    (0, commit_config_1.default)();
});
program
    .command('commitlint')
    .description('使用commitlint检查提交信息')
    .action((str, options) => {
    const commitlint = new commandClass_1.Commitlint('@commitlint/cli');
    commitlint.runCommand(`--config ${path_1.default.resolve(__dirname, 'lint-commit/commitlint.config.js')} --edit`);
});
program.parse(process.argv);
