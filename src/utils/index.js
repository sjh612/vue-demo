/**
 * @name: index
 * @author: win10
 * @date: 2023/11/14 16:13
 * @description：index
 * @update: 2023/11/14 16:13
 */
import cancelDuplicateRequest from './cancelDuplicateRequest.js'
import handleResponseStatus from './handleResponseStatus.js'
import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': `application/json`,
  },
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    cancelDuplicateRequest(config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    handleResponseStatus(response.status)
    return response
  },
  function (error) {
    // 对响应错误做点什么
    if (axios.isAxiosError(error)) {
      if (error.code === `ECONNABORTED`) {
        console.log(`请求超时，请稍后重试`)
      }
    }
    handleResponseStatus(error.response.status)
    return Promise.reject(error)
  }
)

export default request
