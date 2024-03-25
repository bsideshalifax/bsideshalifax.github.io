const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
   entry: {
      app: './src/js/main.js',
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: 'Production',
      }),
      new CopyPlugin({
         patterns: [
           { from: "dist/assets", to: "assets" }
         ],
       }),
   ],

   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
      clean: true,
   },
};
