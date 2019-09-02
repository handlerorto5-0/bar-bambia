let path = require('path');

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        //exclude: '/node_modules' // by default 
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  //devtool: "eval-sourcemap"
}

module.exports = (env,options) => {
  let production = options.mode === 'production';
  conf.devtool = production? false :'eval-sourcemap';
  //console.log(options);
  return conf;
}