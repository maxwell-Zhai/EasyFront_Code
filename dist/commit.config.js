"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
//@ts-ignore
const git_cz_js_1 = require("commitizen/dist/cli/git-cz.js");
exports.default = () => {
    (0, git_cz_js_1.bootstrap)({
        cliPath: path_1.default.join(__dirname, '../node_modules/commitizen'),
        config: {
            path: path_1.default.join(__dirname, 'cz-config/adaptor'),
        },
    });
};
