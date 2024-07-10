import { Command } from 'commander';
import { execSync } from 'child_process';
import path from 'path';

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
  .command('eslint [files...]')
  .description('Run ESLint on specified files or default to src/**/*.ts')
  .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`eslint ${fileList} --config ${path.resolve(__dirname, 'eslint.config.js')}`);
  });

program
  .command('prettier [files...]')
  .description('Run Prettier on specified files or default to src/**/*.ts')
  .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.ts`;
    runCommand(`prettier --write ${fileList} --config ${path.resolve(__dirname, 'prettier.config.js')}`);
  });

program
  .command('stylelint [files...]')
  .description('Run Stylelint on specified files or default to src/**/*.less')
  .action((files) => {
    const cwd = process.cwd();
    const fileList = files.length > 0 ? files.join(' ') : `${cwd}/src/**/*.less`;
    runCommand(`stylelint ${fileList} --config ${path.resolve(__dirname, 'stylelint.config.js')}`);
  });

program.parse(process.argv);
