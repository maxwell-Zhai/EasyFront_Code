module.exports = {
    tabWidth: 4,
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    /** 
     * 建议使用 80 宽度折行
     * @see https://prettier.nodejs.cn/docs/en/options.html#%E6%A0%87%E7%AD%BE%E5%AE%BD%E5%BA%A6 
     * @author siroi
     * */
    printWidth: 80,
    /**
     * 文件换行符需要用 lf 目的是为了 ci
     * @see lf 在 Linux 和 macOS 以及 git repos 中很常见
      */
    endOfLine: 'lf',
    bracketSameLine: true,
    bracketSpacing: true,
    /**
     * 允许箭头函数括号 
     * @author siroi
     * */
    arrowParens: 'always',
    overrides: [
        {
          "files": ".prettierrc",
          "options": { "parser": "json" }
        }
      ]
};