<template>
  <div>
    <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <div
        ref="loadmore"
        :autoFill=false
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="test"
        infinite-scroll-distance="10"
      >
        <slot></slot>
        <slot name="noDataShow" v-if="noDataShow"></slot>
        <p v-show="loading && init && !allLoading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Loadmore, spinner, InfiniteScroll} from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(spinner.name, spinner);
  Vue.use(InfiniteScroll);

  import http from './http'
  export  default {
    props: ['dataArr', 'updateTop', 'updateBottom', 'start'],
    data(){
      /**
       * 皆为内部状态，组件内部独立使用。
       */
      return {
        noDataShow: false, // 是否显示 slot.name = noDataShow 内的html
        loading: true, // 不会触发
        init: false, // 是否被初始化，确保 firstLoadMore 只执行一次。
        allLoading: false, // 是否数据接收完毕
        wrapperHeight: 0,
        loadmoreDom: null
      }
    },
    watch: {
      /**
       * 如果sonStart为true，视为启动组件。执行firstLoadMore方法
       * @param val
       */
      sonStart(val){
        if (val) {
          this.firstLoadMore();
        }
      }
    },
    computed: {
      /**
       * 处理dataArr为空的情况
       * @returns {*|Array}
       */
      list(){
        return this.dataArr || [];
      },
      /**
       * 通过computed获取父组件的数据。防止直接调用。
       */
      sonStart(){
        return this.start;
      }
    },
    mounted(){
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      this.loadmoreDom = this.$refs.loadmore.$el;
    },
    methods: {
      /**
       * 激活组件时，执行一次 ladMore。
       */
      firstLoadMore(){
        if (this.init)return;
        this.loadMore();
        this.init = true;
      },
      loadMore() {
        this.loading = true;
        this.updateBottom().then((noData) => {
          if (noData) {
//                        console.log("加载完毕");
            if (this.list.length == 0) {
              this.noDataShow = true;
            }
            this.allLoading = true;
          } else {
            this.loading = false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .mint-loadmore-top {
    z-index: -100;
  }

  .mint-loadmore-top span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .mint-loadmore {
    overflow: visible;
  }

</style>

<style>
  /*转动刷新 居中*/

  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }

</style>