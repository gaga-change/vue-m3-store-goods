<template>
  <div>
    <!---------------------------- tab4 ---------------------------->
    <div class="mt-20 bg-f5 tab4 clearfix">
      <ul>
        <li v-for="(value, key) in menus" class="fl text-center"
            :class="{'on': key == menus.checked }"
        >
          <a
            class="f30 color-000" href="javascript:void(0);"
            v-text="value.name"
            @click="menus.checked = key"
          ></a>
        </li>
      </ul>
    </div>
    <!---------------------------- 商品 ---------------------------->
    <div id="tab-content">
      <ul>
        <li>
          <router-link
            :to="{name: 'GoodsDetail'}"
          >
            <div class="mt-20 coin-goods bg-fff">
              <div class="p-30 border-bottom clearfix">
                <a class="fl pr" href="javascript:void(0);">
                  <em class="pa bi">币</em>
                  <img src="~images/coins/goods.png"/>
                </a>
                <dl class="fl ml-20">
                  <dt class="f28 color-888">英雄联盟/电信/艾欧尼亚</dt>
                  <dd class="f30 color-000   mt-15">购买 7600金币</dd>
                  <dd class="f30 color-000 mt-15">￥200</dd>
                </dl>
              </div>
              <div class="bg-fff clearfix px-30">
                <div class="fl"><span class="pl-20 f30 color-000 lh110 bl">待付款</span></div>
                <div class="fr goods-btn lh110 clearfix">
                  <button class="d-inline-block color-f75e46 bg-fff border-f75e46 f30">联系客服</button>
                  <button class="d-inline-block color-fff bg-f75e46 f30">去付款</button>
                </div>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <div class="mt-20 coin-goods bg-fff">
            <router-link
              :to="{name: 'GoodsDetail'}"
            >
              <div class="p-30 border-bottom clearfix">
                <a class="fl pr" href="javascript:void(0);">
                  <em class="pa bi">币</em>
                  <img src="~images/coins/goods.png"/>
                </a>
                <dl class="fl ml-20">
                  <dt class="f28 color-888">英雄联盟/电信/艾欧尼亚</dt>
                  <dd class="f30 color-000 mt-15">购买 7600金币</dd>
                  <dd class="f30 color-000 mt-15">￥200</dd>
                </dl>
              </div>
            </router-link>
            <div class="bg-fff clearfix px-30">
              <div class="fl"><span class="pl-20 f30 color-000 lh110 bl">待付款</span></div>
              <div class="fr goods-btn lh110 clearfix">
                <button class="d-inline-block color-f75e46 bg-fff border-f75e46 f30">联系客服</button>
                <button class="d-inline-block color-fff bg-f75e46 f30">去付款</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import http from './http'
//  console.log(http)
  http.getStoreGoods();
  export  default{
    data(){
      return {
        menus: {
          paying: {
            name: '待付款',
            list: []
          },
          payed: {
            name: '已付款',
            list: []
          },
          buySuccess: {
            name: '交易成功',
            list: []
          },
          buyCancel: {
            name: '交易取消',
            list: []
          },
          checked: "paying"
        }
      }
    },

  }
</script>

<style>

</style>
