<template>
    <!--<div>-->
    <!--<h3>我是买家</h3>-->
    <!--<router-view></router-view>-->
    <!--</div>-->
    <div id="wrapper">
        <!---------------------------- top ---------------------------->
        <div class="top-header fixed-top border-bottom">
            <div class="top-back">
                <a href="javascript:history.go(-1)"></a>
            </div>
            <h2 class="f36 ">我是买家</h2>
            <div class="top-right"></div>
        </div>
        <!---------------------------- tab3 ---------------------------->
        <div class="mt-100 bg-fff clearfix tab3">
            <ul class="clearfix">
                <li class="fl text-center">
                    <a class="f32 color-000" href="javascript:void(0);">手机端的商品</a>
                </li>
                <li class="fl text-center">
                    <a class="f32 color-000" href="javascript:void(0);">电脑端的商品</a>
                </li>
                <li class="fl text-center">
                    <a class="f32 color-000 on" href="javascript:void(0);">商城的商品</a>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{}
</script>

<style>
    @import "/css/coins/coins-zch.css";
</style>
