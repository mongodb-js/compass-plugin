const webpack = require('webpack');
const path = require('path');

const project = require('./project');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = {
  target: 'electron-renderer',
  watch: true,
  entry: {
    // Export the entry to our plugin. Referenced in package.json main.
    index: path.resolve(project.path.src, 'index.js')
  },
  output: {
    path: project.path.output,
    publicPath: '/',
    filename: '[name].js',
    // Export our plugin as a UMD library (compatible with all module definitions - CommonJS, AMD and global variable)
    library: '{{pascalcase name}}Plugin',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', 'less'],
    alias: {
      actions: path.join(project.path.src, 'actions'),
      components: path.join(project.path.src, 'components'),
      fonts: path.join(project.path.src, 'assets/fonts'),
      images: path.join(project.path.src, 'assets/images'),
      less: path.join(project.path.src, 'assets/less'),
      plugin: path.join(project.path.src, 'index.js'),
      stores: path.join(project.path.src, 'stores')
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 8192,
            name: 'assets/images/[name]__[hash:base64:5].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 8192,
            name: 'assets/fonts/[name]__[hash:base64:5].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // Do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Defines global variables
    new webpack.DefinePlugin(GLOBALS)
  ],
  devtool: 'cheap-source-map',
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
};
