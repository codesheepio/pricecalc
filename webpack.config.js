var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve('src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/',
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },
}