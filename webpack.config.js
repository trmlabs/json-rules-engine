const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    library: 'jre',
    libraryTarget: 'var'
  },
  plugins: [
    // Needed to bypass the setTimeout
    // used by EventEmitter
    // Since we do NOT actually pass in a non-zero
    // and we do not need things to execute on a separate thread
    // we can just execute the method immediately
    new webpack.DefinePlugin({
      setTimeout: '(fn => fn())',
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: false,
    })
  ],
  mode: 'production',
};
