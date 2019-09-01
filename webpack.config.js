const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Custom templete",
      filename: 'index.html',
      myPageHeader: 'go tramp',
      template: './src/index.html',
    })
  ]
};