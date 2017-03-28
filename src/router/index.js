import Vue from 'vue'
import Router from 'vue-router'
import Help from '@/components/Help'

import {member} from './member'
import {quickLogin} from './quickLogin'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Help',
      component: Help,
      meta: {isPublish: true, requireAuth: false}
    },
    member,
    quickLogin
  ]
})
