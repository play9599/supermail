import axios from 'axios'
export function users(config) {
  const instance1 = new axios.create({
    baseURL:'http://localhost:8080/',
    // baseURL:'http://adi-v3.dev',
    timeout:5000
  });

  // 请求拦截器
  instance1.interceptors.request.use(config => {

    let token = localStorage.getItem('token');
    if (token) {
      // 设置请求头中token的参数
      config.headers.common['token'] = localStorage.getItem('token');
      console.log(token)
    }
    //拦截后需要将拦截下来的请求数据返回发送
    return config;

  }, err => {

  })

  // 响应拦截器
  instance1.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  return instance1(config)
}
export function users_data(config) {
  const instance = axios.create({
    baseURL:'',
    // baseURL:'http://adi-v3.dev',
    timeout:5000,
    // headers:{"Content-Type":"application/json;charset=UTF-8"}
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {

    let token = localStorage.getItem('token');
    if (token) {
      // 设置请求头中token的参数
      config.headers.common['token'] = localStorage.getItem('token');
      console.log(token)
    }
    //拦截后需要将拦截下来的请求数据返回发送
    return config;

  }, err => {

  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    return Promise.reject(err)
  })

  return instance(config)
}

