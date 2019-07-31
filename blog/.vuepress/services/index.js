import axios from 'axios'

const http = axios.create()

function transformRequest(data, headers) {
  if (Object.prototype.toString.call(data) === '[object Object]') {
    const contentType =
      headers['Content-Type'] ||
      headers.post['Content-Type'] ||
      headers.common['Content-Type']

    if (
      typeof contentType === 'string' &&
      contentType.toLowerCase() === 'multipart/form-data'
    ) {
      // 删除Content-Type，因为浏览器会为表单内容自动添加multipart/form-data，
      // 并且会在标明分隔符
      delete headers['Content-Type']
      delete headers.post['Content-Type']
      delete headers.common['Content-Type']

      const params = new FormData()
      for (let name of Object.keys(data)) {
        let value = data[name]
        params.append(name, value)
      }

      return params
    }
  }

  return data
}

/**
 * 拦截请求
 * @param {object} config axios配置文件
 */
function _interceptorRequest(config) {
  return config
}

/**
 * 拦截请求返回
 * @param {object} response axios返回结果
 */
function _interceptorResponse(response) {
  const { data: result, config } = response

  if (result.error === 1) {
    return result.data
  } else {
    return Promise.reject(result)
  }
}

/**
 * 拦截报错信息
 * @param {object} err 错误信息
 */
function _interceptorError(err) {
  return Promise.reject(err)
}

http.defaults.baseURL = '/api/'
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
http.defaults.headers.common['Content-Type'] =
  'application/x-www-form-urlencoded'
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.transformRequest = [transformRequest]
http.interceptors.request.use(_interceptorRequest, _interceptorError)
http.interceptors.response.use(_interceptorResponse, _interceptorError)

export default http
