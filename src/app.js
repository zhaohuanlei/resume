/*
 * @Author: zhaohuanlei
 * @Date: 2017-05-18 18:30:11
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-24 22:48:46
 */

import style from "app.scss";
import Vue from "vue";
import Swiper from "vue-awesome-swiper";
import app from "./app.vue";

Vue.use(Swiper);

let vm = new Vue({
    el: "body",
    render: h => h(app)
});
