"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    git: {
        commitMessage: ":bookmark: ci(release): Release v${version}",
        tagName: "v${version}"
    },
    hooks: {
        "after:bump": "echo 更新版本成功"
    },
    plugins: {
        "@release-it/conventional-changelog": {
            infile: "CHANGELOG.md",
            preset: "angular"
        }
    }
};
exports.default = config;
module.exports = config;
