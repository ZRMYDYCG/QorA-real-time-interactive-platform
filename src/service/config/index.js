// 对于 axios 进行二次封装
import axios from 'axios'

// 1. 利用 axios 对象的方法 create,  去创建一个 axios 实例
let request = axios.create({
  // create 里面实际就是一个配置对象
  // baseUrl: 'https://9110f8o425.goho.co',
  baseURL: 'http://127.0.0.1:5000',
  // baseURL: 'http://192.168.31.86:5000',
  // baseURL: 'http://192.168.137.138:8080',
  // 代表请求超时的时间
  timeout: 5000
})

// 2. 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，headers请求头
  config.headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  return config
})

// 3. 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 成功回调函数：服务器响应数据回来之后，响应拦截器可以检测到，可以做一些处理
    return res
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('faile', error))
  }
)

export default request
