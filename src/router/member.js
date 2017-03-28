/**
 * Created by 严俊东 on 2017/3/16.
 */

const Member = r => require.ensure([], () =>
  r(require('components/member/Member.vue')), '/member'
);
const MemberBuyer = r => require.ensure([], () =>
  r(require('components/member/MemberBuyer.vue')), '/member/member-buyer'
);
const BuyerStoreGoods = r => require.ensure([], () =>
  r(require('components/member/BuyerStoreGoods.vue')), '/member/member-buyer'
);
const GoodsDetail = r => require.ensure([], () =>
  r(require('components/member/GoodsDetail.vue'), '/member/goods-detail')
);


export const member = {
  path: '/member',
  component: Member,
  children: [
    {
      path: 'member-buyer',
      component: MemberBuyer,
      children: [
        {
          path: '',
          name: 'StoreGoods',
          component: BuyerStoreGoods
        }
      ]
    },
    {
      path: 'goods-detail',
      name: 'GoodsDetail',
      component: GoodsDetail,
    }
  ]
};
