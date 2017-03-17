import Vue from 'vue'
import Router from 'vue-router'
import Help from '@/components/Help'

import {member} from './member'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Help',
      component: Help,
    },
    member
  ]
})
