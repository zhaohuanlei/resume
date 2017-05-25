<style>
    .tool {height:50px;line-height:50px;position:fixed;top:0;left:0;right:0;z-index:10;background-color:rgba(0,0,0,.3);color:#ccc;}
    .logo {width:30px;height:30px;float:left;margin:10px 0;white-space:nowrap;overflow:hidden;text-indent:100%;background:url(../img/logo.png) no-repeat;background-size:contain;}
    .nav-box {height:100%;float:right;}
    .nav-list {margin:0;}
    .nav-item {height:30px;padding:0 15px;display:inline-block;vertical-align:middle;line-height:30px;font-size:14px;text-decoration:none;color:#eee;}
    .nav-item.current {background-color:rgba(0,0,0,.7);border-radius:30px;}
    .nav-toggle-btn {width:25px;height:5px;position:relative;float:right;margin:19px 0;display:none;box-shadow:0 2px 0 #eee, 0 -2px #eee;}
    .nav-toggle-btn:before {width:100%;height:2px;position:absolute;bottom:-9px;background-color:#eee;content:"";}
    @media screen and (max-width:480px) {
        .nav-toggle-btn {display:block;}
        .nav-list {width:100%;position:absolute;top:100%;left:0;padding:10px 0;background-color:rgba(0,0,0,.3);border-top:1px solid rgba(255,255,255,.1);display:none;}
        .nav-item {display:block;}
        .nav-item.current {background:none;}
        .nav-box:hover .nav-list {display:block;}
    }
</style>

<template>
    <div class="tool">
        <div class="wrap">
            <h1 class="logo">赵欢磊</h1>
            <div class="nav-box">
                <a class="nav-toggle-btn"></a>
                <p class="nav-list">
                    <a class="nav-item current">个人简历</a>
                    <a class="nav-item" href="http://www.cnblogs.com/huanlei/">技术博客</a>
                    <a class="nav-item" href="">联系方式</a>
                </p>
            </div>            
        </div>
    </div>
</template>
