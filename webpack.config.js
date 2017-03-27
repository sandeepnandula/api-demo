const path = require("path");
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {
  entry: './app/js/index.js',
  output: {
    path: path.join(__dirname,"./app/js/"),
    filename: './build/bundle.js',
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
