const path = require("path");
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './js/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
     {
       test: /\.css$/,
       loader: "style-loader!css-loader",
     }
   ]
  }
}
