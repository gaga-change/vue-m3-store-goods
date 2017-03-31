
const state = {
  waitPayment: 1, // 待付款
  paid: 2, // 已付款
  waitDelivery: 3, //
  delivery: 4,

}

let buyerStoreMenu = {
  paying: {
    state: 'paying',
    name: '待付款',
    list: []
  },
  payed: {
    state: 'payed',
    name: '已付款',
    list: []
  },
  buySuccess: {
    state: 'buy-success',
    name: '交易成功',
    list: []
  },
  buyCancel: {
    state: 'buy-cancel',
    name: '交易取消',
    list: []
  },
  checked: "paying"
}
export {buyerStoreMenu};