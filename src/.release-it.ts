import type { Config } from 'release-it';

const config: Config = {
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

export default config;
module.exports = config;