<template>
  <div id="member-app">
    <vue-go-top></vue-go-top>

    <router-view></router-view>
  </div>
</template>

<script>
  import GoTop from '../common/SortList_GoTop.vue'

  export default {
    name: 'member',
    components: {
      'vue-go-top': GoTop
    },
  }
</script>

<style>
  @import "~css/fost-base.css";
  @import "~css/coins/coins-zch.css";
</style>
