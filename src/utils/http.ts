/*
 * @Author: wanziwen
 * @Date: 2024-08-08 15:15:29
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 18:19:26
 * @Description: 封装全局统一请求处理
 * @FilePath: /my-app-ts/src/utils/http.ts
 */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/',
    timeout: 1000 //设置请求超时时间
})

//请求拦截器
axiosInstance.interceptors.request.use(
    config => {
    //   const token = localStorage.getItem('token') //假设token存储在localStorage中
    //   if (token) {
    //     // config.headers.Authorization = `Bearer ${token}`
    //    
    //   } 
    // //   else {
    // //     throw new Error('Token not found')
    // //   }
      return config
    },
    error => {
      return Promise.reject(error)
    }
)

//响应拦截器
axiosInstance.interceptors.response.use(
    response => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response
    },
    error => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error)
    }
  )

  const get = (url:string, params = {}, options = {}) => {
    return axiosInstance.get(url, { params, ...options });
  }

const post = (url:string, data = {}, options = {}) => {
  return axiosInstance.post(url, data, options);
}
  export { get, post, axiosInstance }
  

  
