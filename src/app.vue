<style>
  .swiper-container {position:absolute;top:0;right:0;bottom:0;left:0;}
  .swiper-slide {position:relative;background-position:center;background-size:cover;}
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {width:4px;height:4px;margin:10px auto;background-color:#fff;opacity:1;}
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet-active {width:12px;height:12px;}
</style>

<template>
  <swiper :options="swiperOption">
    <swiper-slide class="basic-section">
      <basic></basic>
    </swiper-slide>
    <swiper-slide class="skill-section">
      专业技能
    </swiper-slide>
    <swiper-slide class="experience-section">工作经验</swiper-slide>
    <swiper-slide class="hobby-section">兴趣爱好</swiper-slide>
    <swiper-slide class="contact-section">联系方式</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    import basic from "./basic.vue";
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: ".swiper-pagination",
                    direction: "vertical",
                    slidesPerView: 1,
                    paginationClickable: true,
                    mousewheelControl: true
                }
            }
        },
        components: {
            basic,
        }
    }
</script>
