const http = require('http')
const chalk = require('chalk')
const ora = require('ora')

const url = 'http://ip.360.cn/IPShare/info'

module.exports = function getLocation() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return new Promise((resolve, reject) => {
    const spinner = ora('正在获取当前位置').start()
    const request = http.request(url, options, response => {
      console.log(chalk.yellow(`状态码：${response.statusCode}`))
      response.setEncoding('utf8')

      let result = ''
      response.on('data', chunk => {
        result += chunk
      })

      response.on('end', () => {
        result = result ? JSON.parse(result) : {}
        const { location } = result

        if (location) {
          spinner.succeed(`当前位置：${location}`)
          resolve(location)
        } else {
          spinner.fail('获取地理位置失败')
          console.log(chalk.blue(JSON.stringify(result)))
          reject(new Error('未获取到地理位置信息'))
        }
      })
    })

    request.on('error', e => {
      spinner.fail('接口调用失败')
      console.log(chalk.red(`请求遇到问题：${e.message}`))
      reject(e)
    })

    request.end()
  })
}
