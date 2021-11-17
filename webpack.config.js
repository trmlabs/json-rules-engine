const path = require('path');
const webpack = require('webpack');

let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .replace(/(\r\n|\n|\r)/gm, "");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `bundle.${commitHash}.[contenthash].js`,
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
