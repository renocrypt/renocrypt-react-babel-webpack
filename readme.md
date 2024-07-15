- Initialize a new npm project: `npm init -y`
- Install React and React DOM: `npm install react react-dom`
- Install development dependencies: `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`
- Create a webpack configuration file ->

  - Create a file named `webpack.config.js` in your project root and add the following content:

- In the `package.json` add

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```

- Create a Babel configuration file -> named `.babelrc`

## Add Linting and Prettier

Install package

`npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @babel/eslint-parser`

Add the `.eslintrc.js`

Add the `.prettierrc.js`

Add the following to `package.json`

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production",
  "lint": "eslint src/**/*.{js,jsx}",
  "lint:fix": "eslint src/**/*.{js,jsx} --fix",
  "format": "prettier --write src/**/*.{js,jsx,css,scss}"
}
```
