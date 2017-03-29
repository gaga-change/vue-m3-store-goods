// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'

import {CONFIG} from './config'
Vue.use(CONFIG)
Vue.use(VueResource)
Vue.use(MintUI)

Vue.config.productionTip = false;

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isPublish)) {
    if (to.matched.some(record => record.meta.requireAuth)) {
      Vue.getAccount(new Vue()).then((account) => {
        if (account) next();
        else   next({
          path: '/vue/quick-login',
          query: {redirect: to.fullPath}
        })
      })
    }
    else {
      next();
    }
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
