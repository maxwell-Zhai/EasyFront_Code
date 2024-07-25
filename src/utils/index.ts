import { execSync } from 'child_process';
import { dirname } from 'path';

function resolvePackageDir(packageName: string) {
  /**
   * @see https://nodejs.org/api/modules.html#requireresolverequest-options
   */
  const resolvedPath = require.resolve(`${packageName}`);

  //* 从解析后的路径中移除文件名和可能的扩展名，得到包的根目录
  const packageDir = dirname(resolvedPath);

  return packageDir;
}

const runCommand = (command: string) => {
    try {
      execSync(command, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Error executing command: ${command}`);
      process.exit(1);
    }
  };


class Command {
    private packageName: string;
    constructor(packageName: string){
        this.packageName = packageName;
    }
    public getPath(){
        return resolvePackageDir(this.packageName);
    }

    public runCommand(commandParam?: string){}
}


export { Command, runCommand };