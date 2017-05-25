/*
 * @Author: zhaohuanlei
 * @Date: 2017-05-18 18:30:11
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-25 15:17:44
 */

import style from "app.scss";
import Vue from "vue";
import Swiper from "vue-awesome-swiper";
import app from "./app.vue";
import tool from "./tool.vue";

Vue.use(Swiper);
const vm = new Vue({
    el: "#app",
    render: h => h(app)
});

