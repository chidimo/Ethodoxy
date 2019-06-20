# Notes

## Configure Semantic UI Theme with Create React App

1. Find instructions [here](https://react.semantic-ui.com/theming#theming-with-create-react-app)
1. `yarn remove semantic-ui semantic-ui-css`
1. `yarn add @craco/craco craco-less semantic-ui-less --dev`
1. Update `package.json`'s `scripts` section as shown below

        {
            "scripts": {
                "start": "craco start",
                "build": "craco build",
                "test": "craco test",
                "eject": "craco eject"
            }
        }
1. Create a file `craco.config.js` in the same folder level with `package.json` and paste the content shown under it inside
1. Copy some files to `src` folder

        npx cpy-cli **/* ../../../src/semantic-ui/site --cwd node_modules/semantic-ui-less/_site --parents

        npx cpy-cli node_modules/semantic-ui-less/theme.config.example src/semantic-ui --rename=theme.config
1. the second command is meant to copy the content of `node_modules/semantic-ui-less/theme.config.example` into `src/semantic-ui --rename=theme.config`. IF that command doesn't work, just look for the file and do the process manually.
1. At the bottom of `theme.config`, copy and paste the following

        /*******************************
                    Folders
        *******************************/

        @themesFolder : 'themes';
        @siteFolder  : '../../src/semantic-ui/site';

        @import (multiple) "~semantic-ui-less/theme.less";
        @fontPath : '../../../themes/@{theme}/assets/fonts';
1. Place the below line inside `index.js` 

        import 'semantic-ui-less/semantic.less'