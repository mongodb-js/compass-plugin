const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

const project = require('./project');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('test')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = {
  target: 'node', // webpack should compile node compatible code for tests
  externals: [ nodeExternals() ],
  stats: {
    warnings: false
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', 'less'],
    alias: {
      actions: path.join(project.path.src, 'actions'),
      components: path.join(project.path.src, 'components'),
      constants: path.join(project.path.src, 'constants'),
      fonts: path.join(project.path.src, 'assets/fonts'),
      images: path.join(project.path.src, 'assets/images'),
      less: path.join(project.path.src, 'assets/less'),
      plugin: path.join(project.path.src, 'index.js'),
      stores: path.join(project.path.src, 'stores'),
      storybook: project.path.storybook
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '{{pascalcase name}}__[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  project.plugin.autoprefixer
                ];
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /(node_modules)/
      },
      {
          test: /\.(js|jsx)/,
          enforce: 'post', // Enforce as a post step so babel can do its compliation prior to instrumenting code
          exclude: [
              /node_modules/,
              /constants/,
              /.*?(?=\.spec).*?\.js/
          ],
          include: project.path.src,
          use: {
              loader: 'istanbul-instrumenter-loader',
              options: {
                  esModules: true
              }
          }
      }
    ]
  }
};
