<style>
  .swiper-container {position:absolute;top:0;right:0;bottom:0;left:0;}
  .swiper-slide {position:relative;background-position:center;background-size:cover;}
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {width:20px;height:20px;margin:0 auto;text-align:center;line-height:20px;background:none;opacity:1;}
  .swiper-pagination-bullet:after {width:4px;height:4px;margin:0 auto;display:inline-block;vertical-align:middle;content:"";background-color:#fff;transition:all .2s;border-radius:100%;}
  .swiper-pagination-bullet:hover:after {width:8px;height:8px;}
  .swiper-pagination-bullet-active:after {width:12px;height:12px;}
  .basic-section {background-image:url(../img/basic-bg.jpg);}
  .skill-section {height:200px;background-image:url(../img/skill-bg.jpg);}
</style>

<template>
    <div class="main">
        <tool></tool>
        <swiper :options="swiperOption">
            <swiper-slide class="basic-section" data-hash="basic">
                <basic></basic>
            </swiper-slide>
            <swiper-slide class="skill-section" data-hash="skill">
                <skill></skill>
            </swiper-slide>
            <swiper-slide class="experience-section" data-hash="experience">
                <experience></experience>
            </swiper-slide>
            <swiper-slide class="hobby-section" data-hash="hobby">
                <hobby></hobby>
            </swiper-slide>
            <swiper-slide class="contact-section" data-hash="contact">
                <contact></contact>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-scrollbar"></div>
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
                scrollbar: '.swiper-scrollbar',
                scrollbarHide: false,
                slidesPerView: 1,
                speed: 600,
                paginationClickable: true,
                mousewheelControl: true,
                hashnav: true,
                onInit: function (swiper) {
                    console.log(swiper);
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
