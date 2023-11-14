/**
 * @name: cancelDuplicateRequest
 * @author: win10
 * @date: 2023/11/14 16:13
 * @description：cancelDuplicateRequest
 * @update: 2023/11/14 16:13
 */
/**
 * @name: cancelDuplicateRequest
 * @author: win10
 * @date: 2023/8/18 14:04
 * @description：cancelDuplicateRequest
 * @update: 2023/8/18 14:04
 */
// cancelDuplicateRequest.js
import axios from 'axios'

const pendingRequests = new Map()

export default function cancelDuplicateRequest(config) {
  // 基于方法、URL 和请求数据创建请求标识
  const requestKey = `${config.method}:${config.url}:${JSON.stringify(config.data)}`

  if (pendingRequests.has(requestKey)) {
    const cancelTokenSource = pendingRequests.get(requestKey)
    cancelTokenSource.cancel(`取消重复请求`)
  }

  const cancelTokenSource = axios.CancelToken.source()

  config.cancelToken = cancelTokenSource.token
  pendingRequests.set(requestKey, cancelTokenSource)
}
