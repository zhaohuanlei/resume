/*
 * @Author: zhaohuanlei
 * @Date: 2017-05-18 18:30:11
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-19 18:49:27
 */

import app from "app.scss";

import Vue from "vue";

function sum (a = 1, b = 2) {
    return a + b;
}

var n = sum(3);
console.log(n);