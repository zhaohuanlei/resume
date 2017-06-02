<style>  
  .profile {width:200px;position:absolute;top:50%;left:50%;z-index:2;margin:-100px 0 0 -100px;text-align:center;color:#eee;}
  .profile p {margin:7px auto;}
  .profile .avatar {width:150px;height:150px;position:relative;margin:0 auto 20px auto;background-image:url(../img/avatar.jpg);background-size:contain;border:2px solid #ddd;border-radius:100%;overflow:hidden;}
  .avatar:after {width:100%;height:100%;position:absolute;top:0;left:0;content:"";background-color:#000;opacity:0.2;transition:all .2s;}
  .avatar:hover:after {opacity:0;}
  .download-btn {margin:10px 0;padding:0 30px;display:inline-block;line-height:30px;border:2px solid #ddd;color:#eee;font-size:14px;}
</style>

<template>
  <div class="wrap">
    <div class="profile">
      <p class="avatar ani" data-animate-effect="fadeInDown" data-animate-duration="0.5s" data-animate-delay="0s"></p>
      <div class="ani" data-animate-effect="fadeInUp" data-animate-duration="0.5s" data-animate-delay="0s">
        <p class="name">赵欢磊</p>
        <p class="career">前端开发工程师</p>
        <p class=""><a href="./doc/赵欢磊-前端开发工程师-8年.pdf" class="download-btn" download>下载简历</a></p>
      </div>
      
    </div>
  </div>
</template>
