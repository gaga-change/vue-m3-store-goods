<template>
  <div class="hello">
    <h1>辅助页面</h1>
    <ul>
      <li>
        <router-link :to="{name: 'StoreGoods'}">转入商城中的商品</router-link>
      </li>
      <li>
        <router-link :to="{name: 'QuickLogin'}">进入登入页面</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  @import "~css/fost-base.css";
  h1 {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li:nth-child(even) {
    background-color: #bbefa0;
  }

  ul > li:nth-child(odd) {
    background-color: #efbdcb;
  }

  li a {
    border-bottom: 1px solid gainsboro;
    padding: 20px 30px;
    display: block;
  }


</style>
