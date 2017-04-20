// const path = require("path");
// const webpack = require('webpack');
// const WebpackNotifierPlugin = require('webpack-notifier');
//
// const plugins = [new WebpackNotifierPlugin({ alwaysNotify: true })];
//   plugins.push(
//     new webpack.DefinePlugin({
//       'process.env': { NODE_ENV: JSON.stringify('production') },
//     }),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       mangle: true, sourcemap: false, comments: false,
//     })
//   );
// module.exports = {
//   entry: './app/js/HomePage.js',
//   output: {
//     path: path.join(__dirname,"./app/js/"),
//     filename: './build/HomePage.min.js',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015'],
//         },
//       },
//      {
//        test: /\.css$/,
//        loader: "style-loader!css-loader",
//      }
//    ]
//  },
// plugins,
// }

const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
  context: __dirname + '/', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app/js/HomePage.js',
  },
  output: {
    path: path.join(__dirname,"./app/js/"),
    filename: './build/HomePage.min.js',
  },
  module: {
  rules: [
    {
      test: /\.js$/, // Check for all js files
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['react','es2015'] }
      }]
    }
  ]
},
plugins: [
  new WebpackNotifierPlugin({ title: 'Webpack', alwaysNotify: true }),
 ]
};

module.exports = config
