
<style>
.swiper-container {position:absolute;top:0;right:0;bottom:0;left:0;}
img {max-width:100%;}
.swiper-slide {position:relative;background-position:center;background-size:cover;}
.skill-section {background-image:url(../img/3bg.jpg);}
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
    <tool></tool>
  </swiper>
</template>

<script>
import tool from "./header.vue";
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
    basic: basic,
    tool: tool,
  }
}
</script>
