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
