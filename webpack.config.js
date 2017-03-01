
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const bourbon = require('node-bourbon').includePaths;
const normalize = require('node-normalize-scss').includePaths;

const config = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, "app-public/build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "app-public"),
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  module: {
    rules: [
      // linting
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ["eslint-loader"],
        exclude: /(node_modules)/,
      },
      // loader to use sass modules
      {
        test: /\.(scss|css)$/,
        loader: "style-loader!css-loader?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?includePaths[]=" + bourbon + "&includePaths[]=" + normalize
      },
      // loader to use html
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // loader to use babel
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // loader for images
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?name=images/[name].[ext]'
      },
      // loader to use fonts
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?name=fonts/[name].[ext]&limit=100000'
      }
    ]
  }
};

module.exports = config;
