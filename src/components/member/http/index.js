/**
 * Created by 严俊东 on 2017/3/20.
 */

import Vue from 'vue'
import {getStoreGoods} from './getStoreGoods'

export default {
  vm: new Vue(),
  getStoreGoods,
  getTop(firstValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (firstValue > -40) {
          let ret = [];
          for (let i = 3; i > 0; i--) {
            ret.push(firstValue - i);
          }
          resolve(ret)
        } else {
          resolve([])
        }
      }, 1000)
    });
  },
  loadMore(lastValue){
    return new Promise((resolve) => {
      setTimeout(() => {
        if (lastValue < 60) {
          let ret = [];
          for (let i = 1; i < 3; i++) {
            ret.push(lastValue + i)
          }
          resolve(ret);
        } else {
          resolve([]);
        }
      }, 1000)
    })
  }
}