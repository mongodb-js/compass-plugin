const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

const project = require('./project');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = {
  target: 'electron-renderer',
  entry: {
    index: [
      // activate HMR for React
      'react-hot-loader/patch',

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack-dev-server/client?http://0.0.0.0:8080',

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      // the entry point of our plugin
      path.resolve(project.path.src, 'index.js')
    ]
  },
  output: {
    path: project.path.output,
    publicPath: '/',
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
        use: [{ loader: 'style-loader'}, { loader: 'css-loader' }]
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
            name: 'styles/fonts/[name]__[hash:base64:5].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    // Enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // Do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Creates HTML page for us at build time
    new HtmlWebpackPlugin(),

    // Defines global variables
    new webpack.DefinePlugin(GLOBALS)
  ],
  devtool: 'cheap-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    contentBase: project.path.output,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    setup() {
      spawn('electron', [project.path.electron], { shell: true, env: process.env, stdio: 'inherit' })
        .on('close', code => process.exit(0))
        .on('error', spawnError => console.error(spawnError));
    }
  }
};
