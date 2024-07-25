import { dirname } from "path";
import { runCommand, Command } from "./index";

class Commitlint extends Command {
    constructor(packageName: string){
        super(packageName);
    }

    public runCommand(commandParam: string){
        const packagePath = this.getPath();
        runCommand(`node ${packagePath}/cli.js ${commandParam}`)
    }
    
}

class Husky extends Command {
    constructor(packageName: string){
        super(packageName);
    }

    public runCommand(commandParam: string){
        const packagePath = this.getPath();
        runCommand(`node ${packagePath}/bin.js ${commandParam}`)
    }
    
}

class Eslint extends Command {
    constructor(packageName: string){
        super(packageName);
    }

    public runCommand(commandParam: string){
        let packagePath = this.getPath();
        packagePath = dirname(packagePath);
        runCommand(`node ${packagePath}/bin/eslint.js ${commandParam}`)
    }
}

class Stylelint extends Command {
    constructor(packageName: string){
        super(packageName);
    }
    public runCommand(commandParam: string){
        let packagePath = this.getPath();
        //! stylelint 找到的是 lib 下的，需要再往外面找一层
        packagePath = dirname(packagePath);
        runCommand(`node ${packagePath}/bin/stylelint.mjs ${commandParam}`)
    }
}

class ReleaseIt extends Command {
    constructor(packageName: string){
        super(packageName);
    }
    public runCommand(commandParam: string){
        const packagePath = this.getPath();
        runCommand(`node ${packagePath}/../bin/release-it.js ${commandParam}`)
    }
}

export {
    Commitlint,
    Husky,
    Eslint,
    Stylelint,
    ReleaseIt
}