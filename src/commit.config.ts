import path from 'path';
//@ts-ignore

import { bootstrap } from 'commitizen/dist/cli/git-cz.js';

export default () => {
    bootstrap({
        cliPath: path.join(__dirname, '../node_modules/commitizen'),
        config: {
            path: path.join(__dirname, 'cz-config/adaptor'),
        },
    });
}