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
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
//@ts-ignore
const gitcz = __importStar(require("commitizen/dist/cli/git-cz"));
function resolvePackageDir(packageName) {
    /**
     * @see https://nodejs.org/api/modules.html#requireresolverequest-options
     */
    const resolvedPath = require.resolve(`${packageName}`);
    //* 从解析后的路径中移除文件名和可能的扩展名，得到包的根目录
    const packageDir = (0, path_1.dirname)(resolvedPath);
    return packageDir;
}
const gitczPath = resolvePackageDir('commitizen');
const { bootstrap } = gitcz;
exports.default = () => {
    bootstrap({
        cliPath: (0, path_1.dirname)(gitczPath), //* 只获取了 dist 目录，没有获取到 cli 目录，因此还得递归一层
        config: {
            path: (0, path_1.join)(__dirname, 'cz-config/adaptor'),
        },
    });
};
