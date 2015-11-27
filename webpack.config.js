// webpack-dev-server --inline
// webpack-dev-server -d -p (sourcemaps & minify)

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  context: path.resolve('app/js'),
  entry: ['./main'],
  presets: ['es2015'],
  output: {
    path: path.resolve('dist/'),
    publicPath: '/public/assets/js/',
    filename: 'bulletin.js'
  },

  devServer: {
    contentBase: 'public'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: 'node_modules',
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
