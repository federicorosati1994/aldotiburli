var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  
  entry : "./js/app.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [

    //auto generate favicon
    //new FaviconsWebpackPlugin('./favicons/favicon.png'),

    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],

  //webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  }
}
