# Template for Frontend project

## Why this project

This repo aims to provide a comfortable Developer Experience (DX) to newbie React developpers.
It comes with a lo of tools with a asic config:

- Create React App (CRA)
- ESLint
- Prettier
- StyleLint

## First steps

### Install these extensions for VSCode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

**!! BEWARE !!** Installing these plug-ins isn't enough to make the template work as intended ! You need to configure your VSCode to automate auto-linting.
To access your Settings, you can use `Ctrl-,`. What we need here is to access the _json_ format of your settings, it's accessible through the "Open Settings (JSON)" button in the top-right corner.
Here is an example of rules you could use to automate everythind needed:

```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "files.eol": "\n",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
```

### Install `husky`, which will check your code everytime you commit files

- `npm run prepare`
