/*
 * @Author: zhaohuanlei 
 * @Date: 2017-05-18 18:11:12 
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-24 18:30:30
 */
"use strict";

const webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: __dirname
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"],
        //extensions:[".js", ".css", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: ["css-loader"]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    loader: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["env"] }
                }]
            },
            {
                test: /\.(jpg|png)/,
                use: "url-loader?limit=8192&name=[name].[ext]&publicPath= &outputPath=../img/"
            },
            {
                test: /\.html$/,
                use: "html-withimg-loader"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].bundle.css"),
    ]
};