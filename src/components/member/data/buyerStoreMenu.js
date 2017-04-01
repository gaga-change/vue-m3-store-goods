const state = {
  waitPayment: 1, // 待付款
  paid: 2, // 已付款
  waitDelivery: 3, //
  delivery: 4,

}


/*  WaitPayment(1, "待付款"),
  Paid(2, "已付款"),
  WaitDelivery(3, "待发货"),
  Delivery(4, "已发货"),
  Statement(5, "结单"),
  Refund(6, "已退款"),
  Cancelled(7, "已取消"),
  Receive(8, "已收货");*/

let buyerStoreMenu = {
  list: {
    paying: {
      state: 'paying',
      name: '待付款',
      code: '1',
      list: []
    },
    payed: {
      state: 'payed',
      name: '已付款',
      code: '2|3|4|8',
      list: []
    },
    buySuccess: {
      state: 'buy-success',
      name: '交易成功',
      code: '5',
      list: []
    },
    buyCancel: {
      state: 'buy-cancel',
      name: '交易取消',
      code: '6,7',
      list: []
    },
  },
  STATE: {
    waitPayment: 1, // 待付款
    paid: 2, // 已付款
    waitDelivery: 3, //
    delivery: 4,
  },
  checked: "paying"
}
export {buyerStoreMenu};