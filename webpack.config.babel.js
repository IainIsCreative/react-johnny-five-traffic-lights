// @flow

import path from 'path';
import webpack from 'webpack';

import { wdsPort } from './src/shared/config';

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: `http://localhost:${wdsPort}/dist/js`,
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: wdsPort,
    hot: true,
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
