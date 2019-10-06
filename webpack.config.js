const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist')
}

const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `js/all.js`,
    path: PATHS.dist,
    publicPath: ''
  },
  module: {
    rules: [
    {
      test: /\.pug$/,
      loader: "pug-loader",
      options: {
        pretty: true,
      },
    },
    {
      test: /\.scss$/,
      exclude: [/node_modules/],
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },{
      test: /\.(ttf|eot|woff|svg|woff2)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: "../fonts/"
        }
      }
    },{
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        query: {
            name: '../images/[name].[ext]'
        }
      },
    ]
  },
  plugins:
    [
      ...PAGES.map(page => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/, '.html')}`
      })),
      new MiniCssExtractPlugin({
        filename: `css/main.css`,
      }),
      new CopyWebpackPlugin([
        {
          from: './src/fonts',
          to: './fonts'
        },
        {
          from: './src/images',
          to: './images'
        }
    ]),
    ]
}