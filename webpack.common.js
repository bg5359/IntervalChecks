var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/intervalio.ts',
  devtool: 'source-map',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'intervalio.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.WatchIgnorePlugin({paths: [
      /\.js$/,
      /\.d\.ts$/
    ]}),
    new CopyPlugin({
      patterns: [
        { from: "interval-checks", to: "interval-checks" },
      ],
    }),
  ],
  externals: nodeModules
}