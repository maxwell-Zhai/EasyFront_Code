import type { Config } from 'release-it';

const config: Config = {
  git: {
    commitMessage: ':bookmark: ci(release): v${version}',
  },
  hooks: {
    'after:bump': 'echo 更新版本成功',
  },
  npm: {
    publish: true,
    versionArgs: ['--no-workspaces-update'],
  },
  plugins: {
    /**
     * @deprecated 废弃 pnpm 方案，不支持 otp
     *
     * @type {Config}
     */
    // "release-it-pnpm": {
    //   publishCommand: "pnpm publish --access public --no-git-checks --tag $tag",
    // },
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: 'gitmoji-config',
      ignoreRecommendedBump: true,
    },
  },
};

export default config;
module.exports = config;
