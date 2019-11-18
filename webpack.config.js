const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
    }),
  ]
}