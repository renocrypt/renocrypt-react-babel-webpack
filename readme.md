# React - Webpack - Babel from `npm init -y`

## Start the project and install React, Webpack, and Babel

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

## Add ESlint and Prettier

Install package

`npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @babel/eslint-parser`

Add the `.eslintrc.js` and `.eslintignore`

Add the `.prettierrc.js` and `.prettierignore`

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

## Add TailwindCSS

- `npm install tailwindcss postcss autoprefixer lucide-react`
- `npm install --save-dev @babel/plugin-proposal-class-properties`
- `npx tailwindcss init -p` creates

  - `tailwind.config.js` -> Modify as following by adding

    ```javascript
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

    based on the _project structure_.

  - `postcss.config.js` as is

- Create `src/index.css` and add the line `import './index.css';` to `./src/index.js`
- Add line `"plugins": ["@babel/plugin-proposal-class-properties"]` to `.babelrc`
