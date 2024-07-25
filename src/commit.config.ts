import {join, dirname} from 'path';
//@ts-ignore
import * as gitcz from 'commitizen/dist/cli/git-cz';

function resolvePackageDir(packageName: string) {

    /**
     * @see https://nodejs.org/api/modules.html#requireresolverequest-options
     */
    const resolvedPath = require.resolve(`${packageName}`);

    //* 从解析后的路径中移除文件名和可能的扩展名，得到包的根目录
    const packageDir = dirname(resolvedPath);

    return packageDir;
}

const gitczPath = resolvePackageDir('commitizen');

const { bootstrap } = gitcz;

export default () => {
    bootstrap({
        cliPath: dirname(gitczPath), //* 只获取了 dist 目录，没有获取到 cli 目录，因此还得递归一层
        config: {
            path: join(__dirname, 'cz-config/adaptor'),
        },
    });
}