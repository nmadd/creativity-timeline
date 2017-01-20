const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: [
    './app/Start.jsx'
  ],
  output: {
    path: __dirname + "/bundle",
    publicPath: '/static/',
    filename: "bundle.js",
  },
  module: {
    loaders: [{
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [

  ]
};
