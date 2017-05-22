/*
 * @Author: zhaohuanlei
 * @Date: 2017-05-18 18:30:11
 * @Last Modified by: zhaohuanlei
 * @Last Modified time: 2017-05-23 00:06:12
 */

import app from "app.scss";
import Vue from "vue";
import Swiper from "vue-awesome-swiper";

Vue.use(Swiper);



let vm = new Vue({
    el: "#wrap",
    data: {
        swiperOption: {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true
        }
    }
});