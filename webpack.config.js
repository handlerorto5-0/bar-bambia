const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "New title output",
      hash: true,
      filename: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
};