
const state = {
  waitPayment: 1, // 待付款
  paid: 2, // 已付款
  waitDelivery: 3, //
  delivery: 4,

}

let buyerStoreMenu = {
  paying: {
    name: '待付款',
    list: []
  },
  payed: {
    name: '已付款',
    list: []
  },
  buySuccess: {
    name: '交易成功',
    list: []
  },
  buyCancel: {
    name: '交易取消',
    list: []
  },
  checked: "paying"
}
export {buyerStoreMenu};