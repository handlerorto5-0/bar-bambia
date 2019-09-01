const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom templete",
      hash: true,
      filename: 'index.html',
      myPageHeader: 'go tramp',
      template: './src/index.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
};