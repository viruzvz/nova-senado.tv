const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve('./src'),
    publicPath: '/',
    inline: true,
    port: process.env.PORT || 8000,
    host: '127.0.0.1', // Change to '0.0.0.0' for external facing server
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [autoprefixer()] 
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [autoprefixer()]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/assets/', to: 'assets' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/home.pug',
      filename: './home.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/plenario-comissoes.pug',
      filename: './plenario-comissoes.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/senadores.pug',
      filename: './senadores.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/programas.pug',
      filename: './programas.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/sintonizar.pug',
      filename: './sintonizar.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/programacao.pug',
      filename: './programacao.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/youtube-page-vertical.pug',
      filename: './youtube-page-vertical.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/youtube-page-horizontal.pug',
      filename: './youtube-page-horizontal.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/videoMP4-page.pug',
      filename: './videoMP4-page.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/busca.pug',
      filename: './busca.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/duvidas.pug',
      filename: './duvidas.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
