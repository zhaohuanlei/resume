/*
 * @Author: zhaohuanlei 
 * @Date: 2017-05-18 18:11:12 
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-18 19:38:41
 */
"use strict";

const webpack = require("webpack"),
    path = require("path");

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/assets/"
    },
    devServer: {
        contentBase: __dirname
    }
};