import {users_data,users} from './requets'
//轮播图的请求
// export function getHomeMultiData() {
//   return request({
//     url:'/home/multidata'
//   });
// }
export function getHomeMultiData() {
  return users({
    url:"/home_data"
  })
}
export function getData(type,page) {
  return users({
    url:"/users",
    params:{
      type,
      page
    }
  })
}
export function getData_list() {
  return users_data({
    url:"/api/food/index"
  })
}

// export function getGoodsData(type, page) {
//   return request({
//     url: '/test/getGoods',
//     params: {
//       type,
//       page
//     }
//   })
// }
