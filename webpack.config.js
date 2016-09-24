const NODE_ENV = process.env.NODE_ENV || 'dev';
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },

  watch: NODE_ENV === 'dev',

  plugins: [
    new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },

  devtool: NODE_ENV == 'dev' ? 'source-map' : nul
}
