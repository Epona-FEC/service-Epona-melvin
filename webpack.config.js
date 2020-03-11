const path = require('path');

module.exports = {

  entry:'./src/index.js',
  loader: 'babel',
  output: {
    filename: 'build.js'
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}