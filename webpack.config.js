const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',

  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin('css/app.css')
  ]
}
