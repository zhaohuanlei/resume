<style>
  .swiper-container {position:absolute;top:0;right:0;bottom:0;left:0;}
  .swiper-slide {position:relative;background-position:center;background-size:cover;}
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {width:4px;height:4px;margin:10px auto;background-color:#fff;opacity:1;}
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet-active {width:12px;height:12px;}
  .basic-section {background-image:url(../img/basic-bg.jpg);}
  .skill-section {background-image:url(../img/skill-bg.jpg);}
</style>

<template>
    <div class="main">
        <tool></tool>
        <swiper :options="swiperOption">
            <swiper-slide class="basic-section">
                <basic></basic>
            </swiper-slide>
            <swiper-slide class="skill-section">
                <skill></skill>
            </swiper-slide>
            <swiper-slide class="experience-section">
                <experience></experience>
            </swiper-slide>
            <swiper-slide class="hobby-section">
                <hobby></hobby>
            </swiper-slide>
            <swiper-slide class="contact-section">
                <contact></contact>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import {swiperAnimateCache, swiperAnimate} from "./swiper.animate.js";
import tool from "./tool.vue";
import basic from "./basic.vue";
import skill from "./skill.vue";
import experience from "./experience.vue";
import hobby from "./hobby.vue";
import contact from "./contact.vue";
export default {
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                direction: "vertical",
                slidesPerView: 1,
                speed: 600,
                paginationClickable: true,
                mousewheelControl: true,
                onInit: function (swiper) {
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },
                onSlideChangeEnd: function (swiper) {
                    swiperAnimate(swiper);
                }
            }
        }
    },
    components: {
        tool,
        basic,
        skill,
        experience,
        hobby,
        contact
    }
}
</script>
