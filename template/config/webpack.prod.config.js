const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const project = require('./project');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = {
  target: 'electron-renderer',
  entry: {
    index: path.resolve(project.path.src, 'index.js')
  },
  output: {
    path: project.path.output,
    publicPath: './',
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /(node_modules)/
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'file-loader',
          query: {
            name: 'images/[name]__[hash:base64:5].[ext]'
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          query: {
            name: 'styles/font/[name]__[hash:base64:5].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    // Do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Creates HTML page for us at build time
    new HtmlWebpackPlugin(),

    // Extract the dependent compoent styles into a single CSS file to avoid FOUC (flash of unstyled content)
    new ExtractTextPlugin({
        filename: 'styles/index.css',
        allChunks: true,
        ignoreOrder: false // TODO: ignoreOrder: true when using CSS Modules
    }),

    // Defines global variables
    new webpack.DefinePlugin(GLOBALS),

    // An ES6+ aware minifier, results in smaller output compared to UglifyJS given that 
    // Chromium in electron supports the majority of ES6 features out of the box.
    new BabiliPlugin()
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
};
