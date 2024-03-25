const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  module: {
   rules: [
     {
       test: /\.(scss)$/,
       use: [
         {
           loader: 'style-loader'
         },
         {
           loader: 'css-loader'
         },
         {
           loader: 'postcss-loader',
           options: {
             postcssOptions: {
               plugins: () => [
                 require('autoprefixer')
               ]
             }
           }
         },
         {
           loader: 'sass-loader'
         }
       ]
     }
   ]
 }
});
