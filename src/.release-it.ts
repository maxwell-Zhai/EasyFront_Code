import type { Config } from 'release-it';

const config: Config = {
  git: {
    "commitMessage": ":bookmark: ci(release): v${version}",
  },
  hooks: {
    "after:bump": "echo 更新版本成功"
  },
  "npm": {
    publish: true
  },
  plugins: {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "preset": "gitmoji-config",
      ignoreRecommendedBump: true,
    }
  }
};

export default config;
module.exports = config;
