const NODE_ENV = process.env.NODE_ENV || 'dev';
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },

  watch: NODE_ENV === 'dev',

  plugins: [
    new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)}),
    new ExtractTextPlugin("build.css")
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
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!less-loader'
        })
      }
    ]
  },

  devtool: NODE_ENV == 'dev' ? 'source-map' : nul
}
