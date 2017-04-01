/**
 * Created by 严俊东 on 2017/3/29.
 */

/**
 * 商城中的商品
 * @returns {Promise.<TResult>}
 */
function getBuyerStoreOrderList(orderState, start, pageSize) {
  return this.vm.$http.get('/api/mobile-goods-service/rs/purchaseData/myBuyOrderList',
    {
      params: {
        orderState,
        pageSize,
        start
      }
    }).then(() => {
    console.log();
  }, () => {
    console.log("服务请求错误： 获取订单列表")
    return null
  }, () => null)
}

export  {getBuyerStoreOrderList}