const http = require('http')

module.exports = function getLocation() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return new Promise((resolve, reject) => {
    const request = http.request(
      'http://ip.360.cn/IPShare/info',
      options,
      response => {
        console.log(`状态码：${response.statusCode}`)
        console.log(`响应头：${JSON.stringify(response.headers, null, 2)}`)
        response.setEncoding('utf8')

        let result = ''
        response.on('data', chunk => {
          console.log(`响应主体：${chunk}`)
          result += chunk
        })

        response.on('end', () => {
          console.log(`数据接收完成`)
          result = JSON.parse(result)
          // 创建文件
          resolve(result.location)
        })
      }
    )

    request.on('error', e => {
      reject(e)
      console.error(`请求遇到问题：${e.message}`)
    })

    request.end()
  })
}
