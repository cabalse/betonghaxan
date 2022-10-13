const path = require('path');
const resolve = require( 'resolve-app-path' );
const CopyPlugin = require("copy-webpack-plugin");
const devMiddleware = require("webpack-dev-middleware");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      devMiddleware: {
        writeToDisk: true,
      },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, "images/*.png"), to: "images/" },
        ],
      }),
    ],
};