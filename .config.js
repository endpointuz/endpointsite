// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// const childProcess = require('child_process');

// const versionString = childProcess.execSync('git rev-list HEAD --count').toString();

/* eslint-disable */
module.exports = (env = { API_HOST: 'http://185.8.212.25:9090' }) => {

  const envKeys = Object.keys(env).reduce((prev, next) => {
    /* eslint-disable */
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    /* eslint-enable */
    return prev;
  }, {});

  return {
    node: { fs: 'empty' },
    externals: [
      { './cptable': 'var cptable' },
      { './jszip': 'jszip' },
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      // new CopyWebpackPlugin([
      //   {
      //     from: path.resolve(__dirname, './assets/favicon'),
      //     to: path.resolve(__dirname, './dist/favicons'),
      //   },
      // ]),
      new webpack.DefinePlugin(envKeys),
      // new webpack.DefinePlugin({
      //   __VERSION__: versionString,
      // }),
      // new webpack.HashedModuleIdsPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, './public'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              output: 'img/',
            },
          },
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
  };
};
