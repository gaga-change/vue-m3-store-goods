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
  path: '/vue/member',
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
      ],
      meta: {isPublish: true, requireAuth: true}
    },
    {
      path: 'goods-detail',
      name: 'GoodsDetail',
      component: GoodsDetail,
      meta: {isPublish: true, requireAuth: true}
    }
  ],
  meta: {isPublish: true, requireAuth: true} //暂时没登入不能进入
};
