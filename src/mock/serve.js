import MockAdapter from "axios-mock-adapter"
import axios from "axios";
import mockjs from "mockjs"
export default {
  network(){
    const data = mockjs.mock({
      "list|50": [{
        name: "@word()",
        "price|1-100.1-2": 1,
        "star|1-300":1,
        img_url:"http://file.xdf.cn/uploads/181019/1271_20181019170425.jpg"
      }]
    })
    // const data_deal = data.list.splice(0,10)
    const data1 = mockjs.mock({
      "list|50": [{
        name: "@word()",
        "price|1-100.1-2": 1,
        "star|1-300":1,
        img_url:"http://img.mp.sohu.com/upload/20170803/d393b535f55e4272afec6765b33999cc_th.png"
      }]
    })
    const data2 = mockjs.mock({
      "list|50": [{
        name: "@word()",
        "price|1-100.1-2": 1,
        "star|1-300":1,
        img_url:"http://5b0988e595225.cdn.sohucs.com/images/20191123/9351f1df5b744a2893cc7360621de8f0.jpeg"
      }]
    })
    const img_list = mockjs.mock({
          img_url:[
            "http://img.mp.sohu.com/upload/20170803/d393b535f55e4272afec6765b33999cc_th.png",
            "http://5b0988e595225.cdn.sohucs.com/images/20191123/9351f1df5b744a2893cc7360621de8f0.jpeg",
            "http://5b0988e595225.cdn.sohucs.com/images/20170912/d7048bb319074fa984cdd5f74becff75.jpeg",
            "http://file.xdf.cn/uploads/181019/1271_20181019170425.jpg"
          ],
          "list|4":[{
            title:"@name",
            img_url:[
              "https://static.oneplus.cn/data/attachment/forum/201802/21/180152iwr49cnh4srkyk4w.jpg"
            ]
          }]
    })
    // console.log(data.list)
    // let mock = new MockAdapter(axios)
  //   mock.onGet("/users",{params:{type:"pops",page:0}}).reply(200,data.list)
  //   mock.onGet("/users",{params:{type:"news",page:0}}).reply(200,data1.list)
  //   mock.onGet("/users",{params:{type:"sell",page:0}}).reply(200,data2.list)
  //   mock.onGet("/home_data").reply(200,img_list)
  // }
    const getQuery = function(url){
      const index = url.indexOf("?")
      const list = []
      if (index !== -1){
        const query = url.substr(index+1).split("&")
        // console.log(query)
        for (let i=0;i<query.length;i++){
          const data_list = query[i].split("=")
          if (data_list[0] === "type"||"page"){
            list.push(data_list[1])
          }
        }

      }
      return list
    }
    mockjs.mock(/\/users*?/,"get",options=>{
      // console.log(options.url)
      const app = getQuery(options.url)
      if (app[0] ==="pops"){
        // console.log(app[1])
        return data.list.slice(0,10*app[1])
      }
      if (app[0] ==="news"){
        return data1.list.slice(0,10*app[1])
      }
      if (app[0] ==="sell"){
        return data2.list.slice(0,10*app[1])
      }
    })
    mockjs.mock(/\/home_data*?/,"get",()=>{
      return img_list
    })
  }

}
