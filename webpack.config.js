const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      publicPath:'/'
    },
    devServer: {
        contentBase: path.resolve('./src'),
        publicPath: '/',
        inline: true,
        port: process.env.PORT || 8080,
        host: '127.0.0.1', // Change to '0.0.0.0' for external facing server
        historyApiFallback: true,
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { 
                test: /\.pug$/,
                use: [
                    "pug-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            { 
                test: /\.less$/,
                exclude: /node_modules/,
                use: [ 
                    "style-loader",
                    'css-loader', 
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
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new CopyPlugin([
            { from: 'src/assets/', to: 'assets'}
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin ({
            template: "./src/index.pug",
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin ({
            template: "./src/home.pug",
            filename: "./home.html"
        }),
        new MiniCssExtractPlugin ({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}