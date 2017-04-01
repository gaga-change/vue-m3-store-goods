<template>
  <div>
    <!---------------------------- tab4 ---------------------------->
    <div class="mt-20 bg-f5 tab4 clearfix" style="position: absolute; width: 100%;z-index: 1">
      <ul>
        <li v-for="(value, key) in menus.list" class="fl text-center"
            :class="{on: key == menus.checked }"
            @click="menus.checked = key"
        >
          <router-link :to="{ name: 'StoreGoods', params: { state: value.state }}" v-text="value.name" replace></router-link>
        </li>
      </ul>
    </div>
    <div style="height: 1.3rem"></div>
    <!---------------------------- 商品 ---------------------------->
    <div id="tab-content">

      <singleList
        :start="startSingleList"
        :dataArr="list"
        :updateTop="updateTop"
        :updateBottom="updateBottom"
      >
        <ul>
          <li v-for="item in list">
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
        </ul>
        <div slot="noDataShow">
          没有数据没有数据没有数据没有数据没有数据没有数据没
          有数据没有数据没有数据没有数据没
          有数据没有数据没有数据没有数据没有数据没有数据
        </div>
      </singleList>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import singleList from './PullDownAndInfiniteScrollComponent.vue'
  import {buyerStoreMenu} from './data/buyerStoreMenu.js'
  Vue.component('singleList', singleList);
  import http from './http'
  http.getBuyerStoreOrderList("1", 1, 10);
  export  default{
    data(){
      return {
        menus: buyerStoreMenu,
        list: null,
        startSingleList: false, // 启动列表显示的指令
      }
    },
    created(){
      setTimeout(() => {
        this.list = [];
        this.startSingleList = true;
      }, 1000)
    },
    beforeRouteEnter(to, from, next){
      if (to.params.state) {
        next(vm => {
          let pathIsTrue = false;
          for (let key in vm.menus.list) {
            if (vm.menus.list[key].state == to.params.state) {
              console.log(vm.menus.list[key].state, to.params.state)
              pathIsTrue = true;
              vm.menus.checked = key;
            }
          }
          if (!pathIsTrue) {
            console.log("路径不对")
          }
        })
      }
      next()
    },
    methods: {
      updateTop(){
        return new Promise((resolve) => {
          http.getTop(this.list[0]).then(res => {
            this.list.unshift(...res);
            resolve();
          });
        })
      },
      updateBottom(){
        return new Promise((resolve) => {
          let last = this.list[this.list.length - 1] || 0;
          http.loadMore(last).then((res) => {
            res = []
            if (res.length == 0) {
              resolve("加载完毕")
            } else {
              this.list.push(...res);
              resolve();
            }
          });
        });
      }
    }
  }
</script>
