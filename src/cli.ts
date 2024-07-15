import { Command } from 'commander';
import { exec, execSync } from 'child_process';
import path from 'path';
import * as glob from 'glob';
import cz from './commit.config'

const program = new Command();

const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
};

program
  .command('init-hooks')
  .description('初始化hooks')
  .action(() => {
    runCommand(`husky init`);
    execSync('echo pnpm run commitlint > .husky/commit-msg');
  });

program
  .command('eslint [files...]')
  .description('执行eslint检查src目录下的所有ts文件')
  .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`eslint ${fileList} --config ${path.resolve(__dirname, 'eslint.config.js')}`);
  });

program
  .command('prettier [files...]')
  .description('执行prettier格式化src目录下的所有ts文件')
  .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`prettier --write ${fileList} --config ${path.resolve(__dirname, 'prettier.config.js')}`);
  });

program
  .command('stylelint [files...]')
  .description('执行stylelint检查根目录下的所有less文件')
  .action((files: string[]) => {

    const cwd = process.cwd();
    const patterns: string[] = files.length ? files : [`${cwd}/**/*.less`];

    const filesToLint: string[] = [];
    patterns.forEach((pattern: string) => {
      glob.sync(pattern).forEach((file: string) => {
        filesToLint.push(path.resolve(file));
      });
    });

    if (filesToLint.length === 0) {
      console.log('No files found to lint.');
      return;
    }

    const configPath = path.resolve(__dirname, 'stylelint.config.js');

    const command = `stylelint --config ${configPath} ${filesToLint.join(' ')}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        process.exit(1);
      } else {
        console.log(stdout);
      }
    });
  });

program
  .command('commit')
  .description('使用commitizen提交代码')
  .action(() => {
    process.argv.pop();
    cz()
  });

program
  .command('commitlint')
  .description('使用commitlint检查提交信息')
  .action((str,options) => {
    runCommand(
      `commitlint --config ${path.resolve(__dirname, 'commitlint.config.js')} --edit`,
    );
  });

program.parse(process.argv);
