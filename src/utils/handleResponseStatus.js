/**
 * @name: handleResponseStatus
 * @author: win10
 * @date: 2023/11/14 16:15
 * @description：handleResponseStatus
 * @update: 2023/11/14 16:15
 */
/**
 * @name: handleResponseStatus
 * @author: win10
 * @date: 2023/8/18 14:04
 * @description：handleResponseStatus
 * @update: 2023/8/18 14:04
 */
// handleResponseStatus.js
export default function handleResponseStatus(statusCode) {
  switch (statusCode) {
    case 200:
      console.log(`请求成功`)
      break
    case 201:
      console.log(`资源创建成功`)
      break
    case 204:
      console.log(`请求成功，无内容返回`)
      break
    case 400:
      console.log(`请求参数错误`)
      break
    case 401:
      console.log(`未授权访问`)
      break
    case 403:
      console.log(`访问被禁止`)
      break
    case 404:
      console.log(`资源不存在`)
      break
    case 500:
      console.log(`服务器内部错误`)
      break
    default:
      console.log(`其他状态码:`, statusCode)
      break
  }
}
