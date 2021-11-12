const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'jre',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: false,
    })
  ],
  mode: 'production',
};
